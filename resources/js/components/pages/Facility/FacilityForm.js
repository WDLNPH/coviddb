import React from 'react';
import {Field, Formik} from 'formik';
import {Dropdown} from "../../common/forms/FormHelpers";

export default function ({facilityRequestPromise}) {
    async function handleSubmit(values) {
        try {
            const {data} = await facilityRequestPromise(values);
            console.log(data);
            alert("done boi")
        } catch (exception) {
            // skip
        }
    }
    return  (
        <>
            <Formik initialValues={{
                name: '',
                type: '',
                phone: '',
                website: '',
                address: '',
                city: '', // Could represent a city_id
                postal_code: '',
                province: ''
            }}
                onSubmit={handleSubmit}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-first-name">
                                Name of Facility
                            </label>
                            <Field name="facility_name"
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="grid-first-name" type="text" placeholder="Hospital St Justine"/>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-state">
                                Type
                            </label>
                            <Dropdown name="type">
                                <option>Select a type</option>
                                <option>Clinic</option>
                                <option>Hospital</option>
                                <option>Special Installment</option>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-last-name">
                                Phone Number
                            </label>
                            <Field name="phone"
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-last-name" type="text" placeholder="(xxx) xxx - xxxx"/>
                        </div>

                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-last-name">
                                Website
                            </label>
                            <Field name="website"
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-last-name" type="text" placeholder="https://"/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-3/4 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Address
                                </label>
                                <Field name="address" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="street number street name"/>
                            </div>
                            <div className="md:w-1/4 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Postal Code</label>
                                <Field name="postal_code" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="A1A 1A1"/>
                            </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">

                        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">City</label>
                            <Field name="city" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="Montreal"/>
                        </div>

                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-state">
                                Province
                            </label>
                            <Dropdown name="province">
                                <option>Select a type</option>
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
                            </Dropdown>
                        </div>
                        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Country</label>
                            <Field name="country" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="Montreal"/>
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

