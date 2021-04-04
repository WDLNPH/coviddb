import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreatePatient from "./CreateWorker";
import EditPatient from "./EditWorker";
import {useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllPatients} from "../../../api";

const WORKER_COLUMNS = ['first_name','last_name', 'health_worker_id','person_id'];


export default function () {
    // /workers
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreateWorker}/>
                <Route path={`${match.url}/:patientId`} component={EditWorker}/> {/* const {patientId} = useParams(); */}
                <Route render={() => (
                    <>
                        <NavLink to={`${match.url}/create`}>Create a new employee</NavLink>
                        <ListWorkers/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

function ListWorkers() {
    const [workers, setWorkers] = useState([]);
    const [loading, setLoading] = useState(false);

    // componentDidMount
    useEffect(() => {
        async function loadWorkers() {
            setLoading(true);
            try {
                const {data} = await readAllPatients();
                setWorkers(data);
            } catch (e) {
                // skip
            }
            setWorkers(false);
        }
        loadWorkers()
    }, []);

    const memoizedColumns = useMemo(() => WORKER_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    return loading ? '...' : <Table columns={memoizedColumns} data={workers}/>;
}
