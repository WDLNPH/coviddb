import React, {useEffect, useState} from 'react';
import WorkerForm from "./Form/WorkerForm";
import {readOneWorker, updateWorker} from "../../../api";
import {useParams} from "react-router";

export default function () {
    const [worker, setWorker] = useState(null);
    const [loading, setLoading] = useState(false);
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
    return loading ? <>please wait</> : <WorkerForm workerRequestPromise={values => updateWorker(workerId, values)} worker={worker}/>
}
