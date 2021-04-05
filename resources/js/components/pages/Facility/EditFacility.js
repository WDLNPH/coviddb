import React, {useEffect, useState} from 'react';
import FacilityForm from "./FacilityForm";
import {updateFacility} from "../../../api";
import {useParams} from "react-router";

export default function () {
    const [facility, setFacility] = useState(null);
    const [loading, setLoading] = useState(false);
    const {facilityId} = useParams();
    useEffect(() => {
        // fetch the patient object from the db
    }, [])
    return loading ? <>please wait</> : <FacilityForm facilityRequestPromise={values => updateFacility(facilityId, values)} facility={facility}/>
}
