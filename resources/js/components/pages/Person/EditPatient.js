import React from 'react';
import {Field, Formik} from 'formik';
import PatientForm from "./Form/PatientForm";
import {updatePatient} from "../../../api";
import {useParams} from "react-router";

export default function () {
    const {patientId} = useParams();
    return <PatientForm patientRequestPromise={values => updatePatient(patientId, values)}/>
}
