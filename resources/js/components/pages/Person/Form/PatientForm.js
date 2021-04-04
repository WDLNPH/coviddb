import React, {useState, useEffect} from 'react';
import {Field, Formik, useFormikContext} from 'formik';
import {autocompleteRegions} from "../../../../api";

const AutocompleteRegionValues = () => {
    // Grab values and submitForm from context
    const { values, submitForm } = useFormikContext();
    const [search, updateSearch] = useState("");
    const [results, updateResults] = useState(results);
    useEffect(() => {
        async function loadRegionValues(postalCode) {
            try {
                const {data} = autocompleteRegions(postalCode);
            } catch (e) {
                // skip
            }
            console.log(data);
        }
        // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
        if (values.postal_code.length >= 3 && values.postal_code.slice(0,3) !== search) {
            updateSearch(values.postal_code.slice(0,3));
            loadRegionValues(values.postal_code.slice(0,3));
        }
    }, [values, submitForm]);
    return null;
};

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
                <>
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
                                       htmlFor="grid-address">
                                    Address
                                </label>
                                <Field
                                    name="address"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-address" type="text" placeholder="street number street name"/>
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
                                <AutocompleteRegionValues/>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-2">
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
                            <div className="md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-citizenship">
                                    Citizenship
                                </label>
                                <Field
                                    name="citizenship"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-citizenship" type="text" placeholder="Canada"/>
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


                    <div className="w-full md:w-1/2 flex flex-col items-center h-64 mx-auto">
                        <div className="w-full px-4">
                            <div className="flex flex-col items-center relative">
                                <div className="w-full svelte-1l8159u">
                                    <div className="my-2 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u">
                                        <div className="flex flex-auto flex-wrap">
                                            <Badge name="HTML"/>
                                            <Badge name="JavaScript"/>
                                            <Badge name="Ruby"/>
                                            <div className="flex-1">
                                                <input
                                                    placeholder=""
                                                    className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"/>
                                            </div>
                                        </div>
                                        <div
                                            className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                                            <button
                                                className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                                     strokeLinecap="round" strokeLinejoin="round"
                                                     className="feather feather-chevron-up w-4 h-4">
                                                    <polyline points="18 15 12 9 6 15"></polyline>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute shadow top-14 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
                                    <div className="flex flex-col w-full">
                                        <Option name="Python"/>
                                        <Option name="Javascript"/>
                                        <Option name="Ruby"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Formik>
        </>
    )
}

function Badge({name}) {
    return (
        <div
            className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
            <div
                className="text-xs font-normal leading-none max-w-full flex-initial">{name}
            </div>
            <div className="flex flex-auto flex-row-reverse">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
    );
}
function Option({name}) {
    return (
        <div
            className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
            <div
                className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                <div className="w-full items-center flex">
                    <div className="mx-2 leading-6  ">{name}</div>
                </div>
            </div>
        </div>
    );
}
