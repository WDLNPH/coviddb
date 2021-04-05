import React from 'react';
import WorkerForm from "./Form/WorkerForm";
import {createWorker} from "../../../api";

export default function () {
    return <WorkerForm workerRequestPromise={createWorker}/>
}
