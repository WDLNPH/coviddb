import React, {useEffect, useState} from 'react';
import FacilityForm from "./FacilityForm";
import {deleteFacility, readOneFacility, updateFacility} from "../../../api";
import {useHistory, useParams} from "react-router";
import {toast} from "react-toastify";

export default function () {
    const [facility, setFacility] = useState(null);
    const [loading, setLoading] = useState(false);
    const {facilityId} = useParams();
    const history = useHistory();

    useEffect(() => {
        async function loadFacility() {
            setLoading(true);
            try {
                const {data} = await readOneFacility(parseInt(facilityId))
                setFacility(data)
            } catch (e) {
                // skip
                toast.error("Could not find facility");
                history.push('/facilities');
            }
            setLoading(false);
        }
        loadFacility();
        // fetch the patient object from the db
    }, [facilityId]);

    return loading ? <>please wait</> : <FacilityForm removePromise={() => deleteFacility(facilityId)} upsertPromise={values => updateFacility(facilityId, values)} facility={facility}/>
}
