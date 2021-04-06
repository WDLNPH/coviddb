import React from 'react';
import PatientForm, {PersonGroupZoneForm} from "./Form/PatientForm";
import {createPatient} from "../../../api";
import {NavLink} from "react-router-dom";

export default function () {
    return (
        <>
            <div className="mp-page-header">
                <h1 className="mp-page-header-title">Create Patient</h1>
                <NavLink to={`/patients`} className="mp-button w-max">{'<'} Back to Patients</NavLink>
            </div>
            <PatientForm patientRequestPromise={createPatient}/>
        </>
    );
}
