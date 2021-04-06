import React, {useEffect, useState} from 'react';
import PatientForm, {PersonGroupZoneForm} from "./Form/PatientForm";
import {readOnePatient, updatePatient} from "../../../api";
import {useParams} from "react-router";

export default function () {
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(true);
    const {patientId} = useParams();
    useEffect(() => {
        async function loadPatient() {
            setLoading(true);
            try {
                const {data} = await readOnePatient(parseInt(patientId))
                setPatient(data)
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadPatient();
        // fetch the patient object from the db
    }, [patientId])

    return loading ? <>please wait</> : (
        <>
            <PatientForm patientRequestPromise={values => updatePatient(patientId, values)} patient={patient}/>
            <PersonGroupZoneForm />
        </>
    );
}
