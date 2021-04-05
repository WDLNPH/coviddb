import React, {useState, useEffect, useRef} from 'react';
import {Field, FieldArray, Form, Formik, useFormikContext} from 'formik';
import {autocompleteRegions, readAllGroupZones} from "../../../../api";
import PersonSectionForm from "../../../common/forms/PersonSectionForm";

export default function ({patientRequestPromise}) {
    const [groupZones, setGroupZones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("");
    const inputRef = useRef();

    async function handleSubmit(values) {
        try {
            const {data} = await patientRequestPromise(values);
            alert("done boi")
        } catch (exception) {
            // skip
        }
    }

    useEffect(() => {
        async function loadGroupZones() {
            setLoading(true);
            try {
                const {data} = await readAllGroupZones();
                setGroupZones(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }

        loadGroupZones()
    }, []);

    return (
        <>
            <Formik initialValues={{
                first_name: '',
                last_name: '',
                medicare: '',
                dob: '',
                address: '',
                postal_code: '',
                city: '', // Could represent a city_id
                region_id: '',
                province: '',
                citizenship: '',
                email: '',
                phone: '',
                group_zones: []
            }}
            onSubmit={handleSubmit}>
                {({values}) => (
                    <Form>
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                            <PersonSectionForm/>
                            <div className="md:w-1/2 mb-6 mt-3 md:mb-0">
                                <button type="submit" className="mp-button">
                                    Create Patient
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export function PersonGroupZoneForm({personGZRequestPromise}) {

    async function handleSubmit(values) {
        try {
            const {data} = await personGZRequestPromise(values);
            console.log(data);
            alert("done boi")
        } catch (exception) {
            // skip
        }
    }

    return (
        <Formik initialValues={{groupZones: []}} onSubmit={handleSubmit}>



        </Formik>
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
