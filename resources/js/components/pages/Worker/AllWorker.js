import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateWorker from "./CreateWorker";
import EditWorker from "./EditWorker";
import {useHistory, useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllFacilities, readAllWorkers} from "../../../api";

const WORKER_COLUMNS = ['first_name','last_name', 'medicare','position'];

export default function () {
    // /workers
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreateWorker}/>
                <Route path={`${match.url}/:workerId`} component={EditWorker}/>
                <Route render={() => (
                    <>
                        <div className="mp-page-header">
                            <h1 className="mp-page-header-title">List of All Workers</h1>
                            <NavLink to={`${match.url}/create`} className="mp-button w-max">Create a new Worker</NavLink>
                        </div>
                        <ListWorkers/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

function ListWorkers() {
    const [workers, setWorkers] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [facilityId, setFacilityId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingF, setLoadingF] = useState(false);
    const history = useHistory()

    // componentDidMount
    useEffect(() => {
        async function loadFacilities() {
            setLoadingF(true);
            try {
                const {data} = await readAllFacilities();
                setFacilities(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadFacilities()
    }, []);
    useEffect(() => {
        async function loadWorkers() {
            setLoading(true);
            try {
                const {data} = await readAllWorkers({health_center_id: facilityId});
                console.log(data);
                setWorkers(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        console.log()
        loadWorkers()
    }, [facilityId]);

    const memoizedColumns = useMemo(() => WORKER_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    return loading ? '...' : <>
        <div className="flex mb-2">
            <div className="flex flex-1 flex-col">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Filter by Facility Name:
                </label>
                <div className="relative">
                    <select className="mp-form-field" value={facilityId} onChange={(e) => setFacilityId(parseInt(e.target.value))}>
                        {facilities.map(f => <option key={f.health_center_id} value={f.health_center_id}>{f.name}</option>)}
                    </select>
                    <div className="pointer-events-none absolute right-1 top-3 pin-y pin-r flex items-center px-2 text-grey-darker">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-1"></div>
        </div>
        <Table onClick={(worker) =>  history.push(`/workers/${worker.health_worker_id}`)} columns={memoizedColumns} data={workers}/>
        </>
}
