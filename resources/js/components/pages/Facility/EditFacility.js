import React, {useEffect, useState} from 'react';
import FacilityForm from "./FacilityForm";
import {readOneFacility, updateFacility} from "../../../api";
import {useParams} from "react-router";

export default function () {
    const [facility, setFacility] = useState(null);
    const [loading, setLoading] = useState(false);
    const {facilityId} = useParams();
    useEffect(() => {
        async function loadFacility() {
            setLoading(true);
            try {
                const {data} = await readOneFacility(parseInt(facilityId))
                setFacility(data)
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadFacility();
        // fetch the patient object from the db
    }, [facilityId]);

    return loading ? <>please wait</> : <FacilityForm facilityRequestPromise={values => updateFacility(facilityId, values)} facility={facility}/>
}
