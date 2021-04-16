import React, {useEffect, useState} from 'react';
import WorkerForm from "./Form/WorkerForm";
import {readOneWorker, deleteWorker, updateWorker} from "../../../api";
import {useParams} from "react-router";
import {NavLink} from "react-router-dom";

export default function () {
    const [worker, setWorker] = useState(null);
    const [loading, setLoading] = useState(true);
    const {workerId} = useParams();

    useEffect(() => {
        async function loadWorker() {
            setLoading(true);
            try {
                const {data} = await readOneWorker(parseInt(workerId))
                setWorker(data)
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadWorker();
        // fetch the patient object from the db
    }, [workerId]);

    useEffect(() => {
        // fetch the patient object from the db
    }, [])
    return loading ? <>please wait</> : (
        <>
            <div className="mp-page-header">
                <h1 className="mp-page-header-title">(#{worker.health_worker_id}) {worker.first_name} {worker.last_name}</h1>
                <NavLink to={`/workers`} className="mp-button w-max">{'<'} Back to Workers</NavLink>
            </div>
            <WorkerForm workerRemovePromise={() => deleteWorker(workerId)} workerRequestPromise={values => updateWorker(workerId, values)} worker={worker}/>
        </>
    );
}
