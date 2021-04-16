import React, {useEffect, useState} from 'react';
import PatientForm from "./Form/PatientForm";
import {readOnePatient, deletePatient, updatePatient} from "../../../api";
import {useHistory, useParams} from "react-router";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";

export default function () {
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(true);
    const {patientId} = useParams();
    const history = useHistory();

    useEffect(() => {
        async function loadPatient() {
            setLoading(true);
            try {
                const {data} = await readOnePatient(parseInt(patientId))
                setPatient(data)
            } catch (e) {
                // skip
                toast.error("Could not find patient");
                history.push('/patient');
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
            <PatientForm removePromise={() => deletePatient(patientId)} upsertPromise={values => updatePatient(patientId, values)} patient={patient}/>
        </>
    );
}
