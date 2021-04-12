import React from 'react';
import {Field, Formik} from 'formik';
import {NavLink} from "react-router-dom";
import {Dropdown} from "../../common/forms/FormHelpers";

export default function ({diagnosticsRequestPromise, diagnostics}) {
    async function handleSubmit(values) {
        try {
            const {data} = await diagnosticsRequestPromise(values);
            console.log(data);
            alert("done boi")
        } catch (exception) {
            // skip
        }
    }
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
                                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"type="text" placeholder="0000"/>
                        </div>

                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-last-name">
                                Health Facility ID
                            </label>
                            <Field name="hcid"
                                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="hopital "/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Diagnostic Date </label>
                            <Field name="date"
                                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"type="date" placeholder="0000"/>
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
                        <button type="submit" class="bg-transparent hover:bg-grey text-grey-dark font-semibold hover:text-white py-2 px-4 border border-grey hover:border-transparent rounded mr-2"> Submit </button>
                    </div>
                </div>
            </Formik>
        </>
    )

}

