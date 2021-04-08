import React, {useEffect, useState} from 'react';
import SymptomsForm from "./SymptomsForm";
import {readOneSymptoms, updateSymptoms} from "../../../api";
import {useParams} from "react-router";

export default function () {
    const [symptoms, setSymptoms] = useState(null);
    const [loading, setLoading] = useState(false);
    const {symptomId} = useParams();
    useEffect(() => {
        async function loadSymptoms() {
            setLoading(true);
            try {
                const {data} = await readOneSymptoms(parseInt(symptomsId))
                setSymptoms(data)
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadSymptoms();
        // fetch the patient object from the db
    }, [symptomsId]);

    return loading ? <>please wait</> : <SymptomsForm symptomsRequestPromise={values => updateSymptoms(symptomsId, values)} symptoms={symptoms}/>
}
