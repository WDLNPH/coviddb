import React, {useEffect, useState} from 'react';
import PatientForm, {PersonGroupZoneForm} from "./Form/PatientForm";
import {updatePatient} from "../../../api";
import {useParams} from "react-router";

export default function () {
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(false);
    const {patientId} = useParams();
    useEffect(() => {
        // fetch the patient object from the db
    }, [])
    return loading ? <>please wait</> : (
        <>
            <PatientForm patientRequestPromise={values => updatePatient(patientId, values)} patient={patient}/>
            <PersonGroupZoneForm />
        </>
    );
}
