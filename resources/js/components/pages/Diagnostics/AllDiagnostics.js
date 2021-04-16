import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateDiagnostics from "./CreateDiagnostics";
import {useHistory, useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllDiagnostics} from "../../../api";

const DIAGNOSTICS_COLUMNS = ['diagnostic_date','patient_name','health_worker_name', 'health_center_name', 'result'];

export default function () {
    // Diagnostics
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreateDiagnostics}/>
                <Route render={() => (
                    <>
                        <div className="mp-page-header">
                            <h1 className="mp-page-header-title">List of All Diagnostics</h1>
                            <NavLink to={`${match.url}/create`} className="mp-button w-max">Create a new Diagnostics</NavLink>
                        </div>
                        <ListDiagnostics/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

function ListDiagnostics() {
    const [diagnostics, setDiagnostics] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    // componentDidMount
    useEffect(() => {
        async function loadDiagnostics() {
            setLoading(true);
            try {
                const {data} = await readAllDiagnostics();
                console.log(data);
                setDiagnostics(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadDiagnostics()
    }, []);

    const memoizedColumns = useMemo(() => DIAGNOSTICS_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    return loading ? '...' : <Table onClick={(diagnostics) =>  history.push(`/diagnostics/${diagnostics.diagnostic_id}`)} columns={memoizedColumns} data={diagnostics}/>;
}
