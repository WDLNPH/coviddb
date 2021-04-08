import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateSymptoms from "./CreateSymptoms";
import EditSymptoms from "./EditSymptoms";
import {useHistory, useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllSymptoms} from "../../../api";

const SYMPTOMS_COLUMNS = ['Id','symptom'];

export default function () {
    //Symptoms
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreateSymptoms}/>
                <Route path={`${match.url}/:symptomsId`} component={EditSymptoms}/>
                <Route render={() => (
                    <>
                        <div className="mp-page-header">
                            <h1 className="mp-page-header-title">List of All Symptoms</h1>
                            <NavLink to={`${match.url}/create`} className="mp-button w-max">Create a new Symptom</NavLink>
                        </div>
                        <ListSymptoms/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

function ListSymptoms() {
    const [symptoms, setSymptoms] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    // componentDidMount
    useEffect(() => {
        async function loadSymptoms() {
            setLoading(true);
            try {
                const {data} = await readAllSymptoms();
                console.log(data);
                setSymptoms(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadSymptoms()
    }, []);

    const memoizedColumns = useMemo(() => SYMPTOMS_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    return loading ? '...' : <Table onClick={(worker) =>  history.push(`/symptoms/${symptoms.symptoms_id}`)} columns={memoizedColumns} data={symptoms}/>;
}
