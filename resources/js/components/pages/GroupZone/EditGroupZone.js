import React, {useEffect, useState} from 'react';
import {readOneGroupZone, updateGroupZone} from "../../../api";
import {useParams} from "react-router";
import GroupZoneForm from "./GroupZoneForm";

export default function () {
    const [groupZone, setGroupZone] = useState(null);
    const [loading, setLoading] = useState(false);
    const {groupZoneId} = useParams();
    useEffect(() => {
        async function loadGroupZone() {
            setLoading(true);
            try {
                const {data} = await readOneGroupZone(parseInt(groupZoneId))
                setGroupZone(data)
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadGroupZone();
        // fetch the patient object from the db
    }, [groupZoneId]);
    return loading ? <>please wait</> : <GroupZoneForm groupZonesRequestPromise={values => updateGroupZone(groupZoneId, values)} groupZone={groupZone}/>
}
