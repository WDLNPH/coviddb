import React from 'react';
import SymptomsForm from "./SymptomsForm";
import {createSymptoms} from "../../../api";

export default function () {
    return <SymptomsForm upsertPromise={createSymptoms}/>
}
