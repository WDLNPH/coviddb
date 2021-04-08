import React, {useEffect, useState} from 'react';
import PatientForm, {PersonGroupZoneForm} from "./Form/PatientForm";
import {readOnePatient, updatePatient} from "../../../api";
import {useParams} from "react-router";
import {NavLink} from "react-router-dom";

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
            <div className="mp-page-header">
                <h1 className="mp-page-header-title">(#{patient.patient_id}) {patient.first_name} {patient.last_name}</h1>
                <NavLink to={`/patients`} className="mp-button w-max">{'<'} Back to Patients</NavLink>
            </div>
            <PatientForm patientRequestPromise={values => updatePatient(patientId, values)} patient={patient}/>
        </>
    );
}