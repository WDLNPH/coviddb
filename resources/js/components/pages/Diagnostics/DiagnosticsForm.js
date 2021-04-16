import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {NavLink} from "react-router-dom";
import {DeleteButton, withCrud} from "../../common/forms/FormHelpers";


const DiagnosticSchema = Yup.object().shape({
    pid: Yup.number()
        .min(2, 'patient id Too Short!')
        .max(50, 'patient id Too Long!')
        .required('patient id Required'),
    first:  Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('first name Required'),
    last:  Yup.string()
        .min(10, 'last name Too Short!')
        .max(10, 'last name Too Long!')
        .required('last name Required'),
    date:  Yup.date()
        .required('Date Required'),
    hwid: Yup.number()
        .min(2, 'health worker id Too Short!')
        .max(50, 'health worker id Too Long!')
        .required('health worker id Required'),
    hcid:  Yup.number()
        .min(2, 'health center id invalid!')
        .max(50, 'health center id invalid!')
        .required('Required'),
    result:  Yup.boolean()
        .required('Required'),
});




export default withCrud(DiagnosticForm);

function DiagnosticForm({handleRemove, handleSubmit, diagnostics}) {
    return  (
        <>
            <div className="mp-page-header">
                <h1 className="mp-page-header-title">{diagnostics ? `(#${diagnostics.diagnostics_id}) ${diagnostics.name}` : 'Create Diagnostics'}</h1>
                <NavLink to={`/diagnostics`} className="mp-button w-max">{'<'} Back to Diagnostics</NavLink>
            </div>
            <Formik initialValues={{
                pid: diagnostics ? diagnostics.pid : '',
                first: diagnostics ? diagnostics.first : '',
                last: diagnostics ? diagnostics.last : '',
                date: diagnostics ? diagnostics.date : '',
                hwid: diagnostics ? diagnostics.hwid : '',
                hcid: diagnostics ? diagnostics.hcid : '',
                result: diagnostics ? diagnostics.result : '', // Could represent a city_id
            }}
                    validationSchema={DiagnosticSchema}
                    onSubmit={handleSubmit}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Patients ID</label>
                            <Field name="pid"
                                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                   type="text" placeholder="00000"/>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">First Name</label>
                            <Field name="first"
                                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                   type="text" placeholder="john"/>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Last   Name</label>
                            <Field name="last"
                                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                   type="text" placeholder="doe"/>
                        </div>


                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Health Worker ID </label>
                            <Field name="hwid"
                                   className="mp-form-field"type="text" placeholder="0000"/>
                        </div>

                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-last-name">
                                Health Facility ID
                            </label>
                            <Field name="hcid"
                                   className="mp-form-field" type="text" placeholder="hopital "/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Diagnostic Date </label>
                            <Field name="date"
                                   className="mp-form-field"type="date" placeholder="0000"/>
                        </div>

                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-last-name">
                                Results
                            </label>
                            <Field name="result" id="negative"
                                   className="m-3 form-radio h-5 w-5 text-red-600"  type="radio" value="negative "/><span className="m-2 text-gray-700">negative</span>
                            <Field name="result" id="positive"
                                   className="m-3 form-radio h-5 w-5 text-red-600"  type="radio" value="positive"/><span className="m-2 text-gray-700">positive</span>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <button type="submit" className="mp-button">
                            Submit
                        </button>
                        {diagnostics ? (
                            <DeleteButton onClick={handleRemove}/>
                        ): null}
                    </div>
                </div>

            </Formik>
        </>
    )

}

