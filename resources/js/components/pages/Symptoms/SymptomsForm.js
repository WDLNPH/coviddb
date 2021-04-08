import React from 'react';
import {Field, Formik} from 'formik';
import {NavLink} from "react-router-dom";

export default function ({symptomsRequestPromise, symptoms}) {
    async function handleSubmit(values) {
        try {
            const {data} = await symptomsRequestPromise(values);
            console.log(data);
            alert("done boi")
        } catch (exception) {
            // skip
        }
    }
    return  (
        <>
            <div className="mp-page-header">
                <h1 className="mp-page-header-title">{symptoms ? `(#${symptoms.symptoms_id}) ${symptoms.name}` : 'Create Symptoms'}</h1>
                <NavLink to={`/symptoms`} className="mp-button w-max">{'<'} Back to Symptoms</NavLink>
            </div>
            <Formik initialValues={{
                name: symptoms ? symptoms.name : '',
                id: symptoms ? symptoms.id : '',

            }}
                    onSubmit={handleSubmit}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                Name of Facility
                            </label>
                            <Field name="name"
                                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                   id="name" type="text" placeholder="Runny nose"/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                Id
                            </label>
                            <Field name="name"
                                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                   id="id" type="text" placeholder="0"/>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <button type="submit"
                                className="bg-transparent hover:bg-grey text-grey-dark font-semibold hover:text-white py-2 px-4 border border-grey hover:border-transparent rounded mr-2"> Submit
                        </button>
                    </div>
                </div>
            </Formik>
        </>
    )

}

