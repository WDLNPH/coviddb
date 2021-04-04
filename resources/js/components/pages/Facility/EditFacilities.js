import React, {useEffect, useState} from 'react';
import {Field, Formik} from 'formik';
import FacilitiesForm from "./FacilitiesForm";
import {updateFacilities} from "../../../api";
import {useParams} from "react-router";
import FacilitiesForm from "./FacilitiesForm";

export default function () {
    const [facilities, setFacilities] = useState(null);
    const [loading, setLoading] = useState(false);
    const {facilitiesId} = useParams();
    useEffect(() => {
        // fetch the patient object from the db
    }, [])
    return loading ? <>please wait</> : <FacilitiesForm facilitiesRequestPromise={values => updateFacilities(facilitiesId, values)} facilities={facilities}/>
}
