import React from 'react';
import FacilityForm from "./FacilityForm";
import {createFacility} from "../../../api";

export default function () {
    return <FacilityForm upsertPromise={createFacility}/>
}
