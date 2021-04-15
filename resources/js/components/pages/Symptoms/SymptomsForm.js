import React from 'react';
import {Formik} from 'formik';
import {SmartField as Field} from "../../common/forms/FormHelpers";
import {NavLink} from "react-router-dom";
import * as Yup from "yup";
const SympSchema = Yup.object().shape({
    name:  Yup.string()
        .min(2, 'Symptom Description Too Short!')
        .max(50, 'Symptom Description too Long!')
        .required('Symptom Description Required')
});

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
            }}
                    validationSchema={SympSchema}
                    onSubmit={handleSubmit}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                Description of Symptom
                            </label>
                            <Field name="name"
                                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                   id="name" type="text" placeholder="Runny nose"/>
                        </div>
                    </div>

                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <button type="submit" className="mp-button"> Submit</button>
                    </div>
                </div>
            </Formik>
        </>
    )

}

