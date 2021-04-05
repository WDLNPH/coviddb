import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateWorker from "./CreateWorker";
import EditWorker from "./EditWorker";
import {useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllWorkers} from "../../../api";

const WORKER_COLUMNS = ['first_name','last_name', 'medicare','position'];

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
                const {data} = await readAllWorkers();
                console.log(data);
                debugger;
                setWorkers(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadWorkers()
    }, []);

    const memoizedColumns = useMemo(() => WORKER_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    return loading ? '...' : <Table columns={memoizedColumns} data={workers}/>;
}
