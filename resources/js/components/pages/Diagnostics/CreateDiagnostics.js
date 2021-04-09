import React from 'react';
import DiagnosticsForm from "./DiagnosticsForm";
import {createDiagnostics} from "../../../api";

export default function () {
    return <DiagnosticsForm diagnosticsRequestPromise={createDiagnostics}/>
}
