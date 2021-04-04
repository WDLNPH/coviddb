import React, {useEffect, useState} from 'react';
import {Field, Formik} from 'formik';
import WorkerForm from "./WorkerForm";
import {updateWorker} from "../../../api";
import {useParams} from "react-router";

export default function () {
    const [worker, setWorker] = useState(null);
    const [loading, setLoading] = useState(false);
    const {workerId} = useParams();
    useEffect(() => {
        // fetch the patient object from the db
    }, [])
    return loading ? <>please wait</> : <WorkerForm workerRequestPromise={values => updateWorker(workerId, values)} worker={worker}/>
}
