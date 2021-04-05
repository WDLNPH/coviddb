import React from 'react';
import PatientForm, {PersonGroupZoneForm} from "./Form/PatientForm";
import {createPatient} from "../../../api";

export default function () {
    return (
        <>
            <h1 className="text-3xl mb-3 font-bold">Create Patient</h1>
            <PatientForm patientRequestPromise={createPatient}/>
        </>
    );
}
