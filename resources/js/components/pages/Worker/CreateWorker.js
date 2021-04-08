import React from 'react';
import WorkerForm from "./Form/WorkerForm";
import {createWorker} from "../../../api";
import {NavLink} from "react-router-dom";

export default function () {
    return (
        <>
            <div className="mp-page-header">
                <h1 className="mp-page-header-title">Create Worker Profile</h1>
                <NavLink to={`/workers`} className="mp-button w-max">{'<'} Back to Workers</NavLink>
            </div>
            <WorkerForm workerRequestPromise={createWorker}/>
        </>
    );
}
