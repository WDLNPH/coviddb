import React from 'react';
import { Formik, } from 'formik';
import {SmartField as Field} from "../../common/forms/FormHelpers";
import * as Yup from 'yup';
import {Dropdown} from "../../common/forms/FormHelpers";
import {NavLink} from "react-router-dom";


const FacilitySchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name Too Short!')
        .max(50, 'Name Too Long!')
        .required('Name Required'),
    type:  Yup.string()
        .min(2, 'Type Too Short!')
        .max(50, 'Type Too Long!')
        .required('Type Required'),
    phone:  Yup.number()
        .min(10, 'Phone Too Short!')
        .max(10, 'Phone Too Long!')
        .required('Phone Required'),
    website:  Yup.string()
        .min(2, 'website Too Short!')
        .max(50, 'website Too Long!')
        .required('website Required'),
    address: Yup.string()
        .min(2, 'Address Too Short!')
        .max(50, 'Address Too Long!')
        .required('Address Required'),
    city:  Yup.string()
        .min(2, 'City invalid!')
        .max(50, 'City invalid!')
        .required('City Name Required'),
    postal_code:  Yup.string()
        .min(6, 'Postal Code invalid')
        .max(7, 'Postal Code invalid')
        .required('Postal code Required'),
    province: Yup.string()
        .required('province is required')
});


export default function ({facilityRequestPromise, facility}) {
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
            <div className="mp-page-header">
                <h1 className="mp-page-header-title">{facility ? `(#${facility.health_center_id}) ${facility.name}` : 'Create Facility'}</h1>
                <NavLink to={`/facilities`} className="mp-button w-max">{'<'} Back to Facilities</NavLink>
            </div>
            <Formik
                initialValues={{
                    name: facility ? facility.name : '',
                    type: facility ? facility.type : '',
                    phone: facility ? facility.phone : '',
                    website: facility ? facility.website : '',
                    address: facility ? facility.address : '',
                    city: facility ? facility.city : '', // Could represent a city_id
                    postal_code: facility ? facility.postal_code : '',
                    province: facility ? facility.province : ''
                }}
                validationSchema={FacilitySchema}
                onSubmit={handleSubmit}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-first-name">
                                Name of Facility
                            </label>
                            <Field
                                name="name"
                                className="mp-form-field"
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
                                className="mp-form-field"
                                id="grid-last-name" type="text" placeholder="(xxx) xxx - xxxx"/>
                        </div>

                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-last-name">
                                Website
                            </label>
                            <Field name="website"
                                className="mp-form-field"
                                id="grid-last-name" type="text" placeholder="https://"/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-3/4 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Address
                                </label>
                                <Field name="address" className="mp-form-field" type="text" placeholder="street number street name"/>
                            </div>
                            <div className="md:w-1/4 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Postal Code</label>
                                <Field name="postal_code" className="mp-form-field" type="text" placeholder="A1A 1A1"/>
                            </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">City</label>
                            <Field name="city" className="mp-form-field" type="text" placeholder="Montreal"/>
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
                            <Field name="country" className="mp-form-field" type="text"/>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <button
                            type="submit"
                            className="mp-button">
                            Submit
                        </button>
                    </div>
                </div>
            </Formik>
        </>
    )

}

