import React from 'react';
import {Field, Formik} from 'formik';
import WorkerForm from "./WorkerForm";
import {createWorker} from "../../../api";

export default function () {
    return <WorkerForm workerRequestPromise={createWorker}/>
}
