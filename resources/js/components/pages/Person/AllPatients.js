import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreatePatient from "./CreatePatient";
import EditPatient from "./EditPatient";
import {useHistory, useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllPatients} from "../../../api";

const PATIENT_COLUMNS = ['first_name','last_name', 'medicare','dob'];


export default function () {
    // /patients
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreatePatient}/>
                <Route path={`${match.url}/:patientId`} component={EditPatient}/> {/* const {patientId} = useParams(); */}
                <Route render={() => (
                    <>
                        <NavLink to={`${match.url}/create`}>Create a new patient</NavLink>
                        <ListPatients/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

function ListPatients() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory()
    // componentDidMount
    useEffect(() => {
        async function loadPatients() {
            setLoading(true);
            try {
                const {data} = await readAllPatients();
                setPatients(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadPatients()
    }, []);

    const memoizedColumns = useMemo(() => PATIENT_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    return loading ? '...' : <Table onClick={(patient) =>  history.push(`/patients/${patient.patient_id}`)} columns={memoizedColumns} data={patients}/>;
}
