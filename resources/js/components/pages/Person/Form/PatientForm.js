import {Form, Formik,} from 'formik';
import PersonSectionForm from "../../../common/forms/PersonSectionForm";
import {DeleteButton, withCrud} from "../../../common/forms/FormHelpers";
import React from "react";

export default withCrud(PatientForm);

function PatientForm({patient, handleSubmit, handleRemove}) {
    return (
        <>
            <Formik initialValues={{
                first_name: patient ? patient.first_name : '',
                last_name: patient ? patient.last_name : '',
                medicare: patient ? patient.medicare : '',
                dob: patient ? patient.dob : '',
                address: patient ? patient.address : '',
                postal_code: patient ? patient.postal_code : '',
                postal_code_id: patient ? patient.postal_code_id : '',
                city: patient ? patient.city : '', // Could represent a city_id
                region: patient ? patient.region : '',
                province_code: patient ? patient.province_code : '',
                citizenship: patient ? patient.citizenship : '',
                email: patient ? patient.email : '',
                phone: patient ? patient.phone : '',
                group_zones: patient && ![null,"",undefined].includes(patient.group_zones)? patient.group_zones.split(',') : []
            }}
            onSubmit={handleSubmit}>
                {({values}) => (
                    <Form>
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                            <PersonSectionForm/>
                            <div className="md:w-1/2 mb-6 mt-3 md:mb-0">
                                <button type="submit" className="mp-button">
                                    {patient ? 'Update' : 'Create'} Patient
                                </button>
                                {patient ? (
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

// TODO: move to form helpers
export function Badge({name, onClick}) {
    return (
        <div
            className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
            <div
                className="text-xs font-normal leading-none max-w-full flex-initial">{name}
            </div>
            <div className="flex flex-auto flex-row-reverse" onClick={onClick}>
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

// TODO: move to form helpers
export function Option({name, onClick}) {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
            <div
                className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                <div className="w-full items-center flex">
                    <div className="mx-2 leading-6">{name}</div>
                </div>
            </div>
        </div>
    );
}
