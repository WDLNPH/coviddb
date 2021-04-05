import React, {useEffect, useState} from 'react';
import {Field, Formik} from 'formik';
import {updateRegions} from "../../../api";
import {useParams} from "react-router";
import RegionForm from "./RegionForm";

export default function () {
    const [regions, setRegions] = useState(null);
    const [loading, setLoading] = useState(false);
    const {regionsId} = useParams();
    useEffect(() => {
        // fetch the patient object from the db
    }, [])
    return loading ? <>please wait</> : <RegionForm regionRequestPromise={values => (regionsId, values)} regions={regions}/>
}
