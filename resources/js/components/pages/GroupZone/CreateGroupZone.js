import React from 'react';
import GroupZoneForm from "./GroupZoneForm";
import {createGroupZone} from "../../../api";

export default function () {
    return <GroupZoneForm upsertPromise={createGroupZone}/>
}
