import React, {useEffect, useState} from 'react';
import {Field, Formik} from 'formik';
import {updateGroupZones} from "../../../api";
import {useParams} from "react-router";
import GroupZonesForm from "./GroupZonesForm";

export default function () {
    const [groupZones, setGroupZones] = useState(null);
    const [loading, setLoading] = useState(false);
    const {groupZonesId} = useParams();
    useEffect(() => {
        // fetch the patient object from the db
    }, [])
    return loading ? <>please wait</> : <GroupZonesForm groupZonesRequestPromise={values => (updateGroupZonesId, values)} groupZones={groupZones}/>
}
