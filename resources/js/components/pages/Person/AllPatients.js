import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreatePatient from "./CreatePatient";
import EditPatient from "./EditPatient";
import {useHistory, useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllPatients} from "../../../api";

const PATIENT_COLUMNS = ['first_name','last_name', 'address', 'medicare','dob'];


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
                        <div className="mp-page-header">
                            <h1 className="mp-page-header-title">List of All Patients</h1>
                            <NavLink to={`${match.url}/create`} className="mp-button w-max">Create a new Patient</NavLink>
                        </div>
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
    const [address, setAddress] = useState('');
    const history = useHistory();

    async function loadPatients() {
        setLoading(true);
        try {
            const {data} = await readAllPatients({address});
            setPatients(data);
        } catch (e) {
            // skip
        }
        setLoading(false);
    }
    // componentDidMount
    useEffect(() => {
        loadPatients()
    }, []);

    const memoizedColumns = useMemo(() => PATIENT_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    // row.original <--- {patient_id: 1, first_name: 'Bruce', last_name: 'Wayne'}
    return loading ? '...' : <>
        <div className="flex mb-2">
            <div className="flex flex-1 flex-col">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Filter by Address:
                </label>
                <div className="relative">
                    <input type="text" className="mp-form-field" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-left">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    &nbsp;
                </label>
                <button className="ml-2 w-32 mp-button" onClick={loadPatients}>Search</button>
            </div>
        </div>
        <Table onClick={(patient) => history.push(`/patients/${patient.patient_id}`)} columns={memoizedColumns} data={patients}/>
    </>;
}
