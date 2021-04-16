import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {SmartField as Field, withCrud} from "../../common/forms/FormHelpers";
import {fetchSymptoms} from '../../../api';

export default withCrud(CreateForm);

function CreateForm({handleSubmit}) {
    const [symptoms, setSymptoms] = useState([]);

    useEffect(() => {
        console.log("running");
        // On Mount, load Symptoms
        async function loadSymptoms() {
            const {data} = await fetchSymptoms();
            setSymptoms(data);
        }
        loadSymptoms();
    }, [])

    return (
        <Formik initialValues={{
            created_at: new Date(),
            symptoms: []
        }}
        onSubmit={handleSubmit}>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            Follow-up Date
                        </label>
                        <Field
                            name="created_at"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                            type="date"/>
                        {/*<p className="text-red text-xs italic">Please fill out this field.</p>*/}
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-password">
                            Symptoms
                        </label>
                        <div className="flex flex-col">
                            {symptoms.map(symptom => (
                                <label className="inline-flex items-center mt-3">
                                    <Field key={symptom.symptom_id} type="checkbox" name="symptoms" value={"" + symptom.symptom_id} className="form-checkbox h-5 w-5 text-gray-600"/>
                                    <span className="ml-2 text-gray-700">{symptom.symptom}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span className="inline-block mr-2">Submit Form</span>
                </button>
            </div>
        </Formik>
    );
}
