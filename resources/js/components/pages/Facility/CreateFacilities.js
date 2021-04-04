import React from 'react';
import {Field, Formik} from 'formik';
import FacilitiesForm from "./FacilitiesForm";
import {createFacilities} from "../../../api";

export default function () {
    return <FacilitiesForm facilitiesRequestPromise={createFacilities}/>
}
