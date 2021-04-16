import React, {useEffect, useState} from 'react';
import SymptomsForm from "./SymptomsForm";
import {readOneSymptoms, updateSymptoms} from "../../../api";
import {useHistory, useParams} from "react-router";
import {toast} from "react-toastify";

export default function () {
    const [symptoms, setSymptoms] = useState(null);
    const [loading, setLoading] = useState(false);
    const {symptomId} = useParams();
    const history = useHistory();

    useEffect(() => {
        async function loadSymptoms() {
            setLoading(true);
            try {
                const {data} = await readOneSymptoms(parseInt(symptomId))
                setSymptoms(data)
            } catch (e) {
                // skip
                toast.error("Could not find symptom");
                history.push('/symptoms');
            }
            setLoading(false);
        }
        loadSymptoms();
        // fetch the patient object from the db
    }, [symptomId]);

    return loading ? <>please wait</> : <SymptomsForm symptomsRequestPromise={values => updateSymptoms(symptomId, values)} symptoms={symptoms}/>
}
