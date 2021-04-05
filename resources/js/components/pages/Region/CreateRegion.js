import React from 'react';
import RegionForm from "./RegionForm";
import {createRegion} from "../../../api";

export default function () {
    return <RegionForm regionRequestPromise={createRegion}/>
}
