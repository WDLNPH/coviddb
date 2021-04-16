import React, {useEffect, useState} from 'react';
import {deleteGroupZone, readOneGroupZone, updateGroupZone} from "../../../api";
import {useHistory, useParams} from "react-router";
import GroupZoneForm from "./GroupZoneForm";
import {toast} from "react-toastify";

export default function () {
    const [groupZone, setGroupZone] = useState(null);
    const [loading, setLoading] = useState(false);
    const {groupZoneId} = useParams();
    const history = useHistory();

    useEffect(() => {
        async function loadGroupZone() {
            setLoading(true);
            try {
                const {data} = await readOneGroupZone(parseInt(groupZoneId))
                setGroupZone(data)
            } catch (e) {
                // skip
                toast.error("Could not find group zone");
                history.push('/group-zones');
            }
            setLoading(false);
        }
        loadGroupZone();
        // fetch the patient object from the db
    }, [groupZoneId]);
    return loading ? <>please wait</> : <GroupZoneForm removePromise={() => deleteGroupZone(groupZoneId)} upsertPromise={values => updateGroupZone(groupZoneId, values)} groupZone={groupZone}/>
}
