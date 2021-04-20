import React from 'react';
import {Form, Formik, useFormikContext,} from 'formik';
import {DeleteButton, withCrud, SmartField as Field} from "../../common/forms/FormHelpers";
import * as Yup from 'yup';
import {Dropdown} from "../../common/forms/FormHelpers";
import {NavLink} from "react-router-dom";
import {AutocompleteRegionValues} from "../../common/forms/AutocompleteRegion";


const FacilitySchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name Too Short!')
        .max(50, 'Name Too Long!')
        .required('Name Required'),
    type:  Yup.string()
        .min(2, 'Type Too Short!')
        .max(50, 'Type Too Long!')
        .required('Type Required'),
    phone:  Yup.string()
        .required('Phone Required'),
    website:  Yup.string()
        .required('website Required'),
    address: Yup.string()
        .min(2, 'Address Too Short!')
        .max(50, 'Address Too Long!')
        .required('Address Required'),
    postal_code:  Yup.string()
        .required('Postal code Required')
});



export default withCrud(FacilityForm);

function FacilityForm({handleRemove, handleSubmit, facility}) {
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
                    region: '',
                    postal_code_id: facility ? facility.postal_code_id : '',
                    city: facility ? facility.city : '', // Could represent a city_id
                    postal_code: facility ? facility.postal_code : '',
                    province: facility ? facility.province : ''
                }}
                validationSchema={FacilitySchema}
                onSubmit={handleSubmit}>
                {({setFieldValue}) => (
                    <Form>
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
                                    <AutocompleteRegionValues onUpdate={regions => {
                                        if (regions.length > 0) {
                                            setFieldValue('postal_code_id', regions[0].postal_code_id)
                                            setFieldValue('city', regions[0].city);
                                            setFieldValue('region', regions[0].region);
                                            setFieldValue('province', regions[0].province)
                                            setFieldValue('country', 'Canada')
                                        } else {
                                            setFieldValue('postal_code_id', null)
                                            setFieldValue('city', '');
                                            setFieldValue('region', '');
                                            setFieldValue('province', '')
                                            setFieldValue('country', '')
                                        }
                                    }}/>
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
                                    <Dropdown name="province" id="province" disabled>
                                        <option value="Alberta">Alberta</option>
                                        <option value="British Columbia">British Columbia</option>
                                        <option value="Manitoba">Manitoba</option>
                                        <option value="New Brunswick">New Brunswick</option>
                                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                        <option value="Nova Scotia">Nova Scotia</option>
                                        <option value="Ontario">Ontario</option>
                                        <option value="Prince Edward Island">Prince Edward Island</option>
                                        <option value="Quebec">Quebec</option>
                                        <option value="Saskatchewan">Saskatchewan</option>
                                    </Dropdown>
                                </div>
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Country</label>
                                    <Field disabled name="country" className="mp-form-field" type="text"/>
                                </div>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <button type="submit" className="mp-button">
                                    Submit
                                </button>

                                {facility ? (
                                    <DeleteButton onClick={handleRemove}/>
                                ): null}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )

}

