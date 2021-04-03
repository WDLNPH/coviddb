import React from 'react';
import {Field, Formik} from 'formik';


export default function ({patientRequestPromise}) {
    async function handleSubmit(values) {
        try {
            const {data} = await patientRequestPromise(values);
            console.log(data);
            alert("done boi")
        } catch (exception) {
           // skip
        }
    }
    return  (
        <>
            <Formik initialValues={{
                medicare: '',
                dob: '',
                first_name: '',
                last_name: '',
                address: '',
                city: '', // Could represent a city_id
                postal_code: '',
                province: '',
                citizenship: '',
                email: '',
                phone: ''
            }}
            onSubmit={handleSubmit}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            First Name
                        </label>
                        <Field
                            name="first_name"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                            id="grid-first-name" type="text" placeholder="Jane"/>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <Field
                            name="last_name"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            Medicare ID
                        </label>
                        <Field
                            name="medicare"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="grid-city" type="text" placeholder=""/>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            Date of Birth
                        </label>
                        <Field
                            name="dob"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="grid-city" type="date" placeholder=""/>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            Address
                        </label>
                        <Field
                            name="address"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="grid-city" type="text" placeholder="street number street name"/>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            City
                        </label>
                        <Field
                            name="city"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="grid-city" type="text" placeholder="Montreal"/>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-zip">
                            Postal Code
                        </label>
                        <Field
                            name="postal_code"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="grid-zip" type="text" placeholder="A1A 1A1"/>
                    </div>
                </div>
                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-zip">
                                Citizenship
                            </label>
                            <Field
                                name="citizenship"
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-zip" type="text" placeholder="Canada"/>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-state">
                                Province
                            </label>
                            <div className="relative">
                                <Field
                                    as="select"
                                    name="province"
                                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                                    id="grid-state">
                                    <option>Alberta</option>
                                    <option>British Columbia</option>
                                    <option>Manitoba</option>
                                    <option>New Brunswick</option>
                                    <option>Newfoundland and Labrador</option>
                                    <option>Nova Scotia</option>
                                    <option>Ontario</option>
                                    <option>Prince Edward Island</option>
                                    <option>Quebec</option>
                                    <option>Saskatchewan</option>
                                </Field>
                                <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker" style={{right: '5px', top: '17px'}}>
                                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            Email Address
                        </label>
                        <Field
                            name="email"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="grid-city" type="text" placeholder=""/>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-zip">
                            Phone Number
                        </label>
                        <Field
                            name="phone"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="grid-zip" type="text" placeholder=""/>
                    </div>
                </div>
                <div className="md:w-1/2 mb-6 mt-3 md:mb-0">
                    <button type="submit" className="bg-transparent hover:bg-grey text-grey-dark font-semibold hover:text-white py-2 px-4 border border-grey hover:border-transparent rounded mr-2"> Create Patient </button>
                </div>
            </div>
            </Formik>
            <Formik initialValues={{
                medicare: '',
                dob: '',
                first_name: '',
                last_name: '',
                address: '',
                city: '', // Could represent a city_id
                postal_code: '',
                province: '',
                citizenship: '',
                email: '',
                phone: ''
            }}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            Group Zones
                        </label>
                        <Field
                            as="textarea"
                            name="first_name"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                            id="grid-first-name" type="text" placeholder="Jane"/>
                    </div>
                </div>
            <div className="md:w-1/2 mb-6 mt-3 md:mb-0">
                <button type="submit" className="bg-transparent hover:bg-grey text-grey-dark font-semibold hover:text-white py-2 px-4 border border-grey hover:border-transparent rounded mr-2">
                    Update Group Zones </button>
            </div>
        </div>
        </Formik>
        </>
    )

}
