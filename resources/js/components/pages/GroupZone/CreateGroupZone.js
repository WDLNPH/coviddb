import React from 'react';
import {Field, Formik} from 'formik';
import GroupZonesForm from "./GroupZonesForm";
import {createGroupZones} from "../../../api";

export default function () {
    return <GroupZonesForm groupZonesRequestPromise={createGroupZones}/>
}
