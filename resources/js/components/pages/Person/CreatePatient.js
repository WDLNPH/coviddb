import React from 'react';
import {Field, Formik} from 'formik';
import PatientForm from "./Form/PatientForm";
import {createPatient} from "../../../api";

export default function () {
    return <PatientForm patientRequestPromise={createPatient}/>
}
