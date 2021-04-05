import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from 'formik';
import PersonSectionForm from "../../../common/forms/PersonSectionForm";
import {readAllFacilities, readAllGroupZones, readAllPositions} from "../../../../api";


export default function ({workerRequestPromise}) {

    const [facilities, setFacilities] = useState([]);
    const [positions, setPositions] = useState([]);
    const [loadingF, setLoadingF] = useState(false);
    const [loadingP, setLoadingP] = useState(false);

    useEffect(() => {
        async function loadFacilities() {
            setLoadingF(false)
            try {
                const {data} = await readAllFacilities();
                setFacilities(data);
            } catch (e) {
                // skip
            }
            setLoadingF(false);
        }
        async function loadPositions() {
            setLoadingP(true);
            try {
                const {data} = await readAllPositions();
                setPositions(data);
            } catch (e) {
                // skip
            }
            setLoadingP(false);
        }
        loadFacilities();
        loadPositions()
    }, []);

    async function handleSubmit(values) {
        try {
            const {data} = await workerRequestPromise(values);
            alert("done boi1")
        } catch (exception) {
            // skip
        }
    }

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
                group_zones: [],
                position_id: '',
                health_center_id: '',
                schedule: {
                    monday: {
                        open: '',
                        close: ''
                    },
                    tuesday: {
                        open: '',
                        close: ''
                    },
                    wednesday: {
                        open: '',
                        close: ''
                    },
                    thursday: {
                        open: '',
                        close: ''
                    },
                    friday: {
                        open: '',
                        close: ''
                    },
                    saturday: {
                        open: '',
                        close: ''
                    },
                    sunday: {
                        open: '',
                        close: ''
                    },
                },
            }}
            onSubmit={handleSubmit}>
                {({values}) => (
                    <Form>
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                            <PersonSectionForm/>
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Position</label>
                                    <div className="relative">
                                        <Field
                                            as="select"
                                            name="position"
                                            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                                        >
                                            {positions.map(position => (
                                                <option value={position.id}>
                                                    {position.position}
                                                </option>
                                            ))}
                                        </Field>
                                        <div className="pointer-events-none absolute right-1 top-3 pin-y pin-r flex items-center px-2 text-grey-darker">
                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Facility Name</label>
                                    <div className="relative">
                                        <Field as="select"
                                               name="health_center_id"
                                               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="">
                                            {facilities.map(facility => (
                                                <option value={facility.health_center_id}>
                                                    {facility.name}
                                                </option>
                                            ))}
                                        </Field>
                                        <div className="pointer-events-none absolute right-1 top-3 pin-y pin-r flex items-center px-2 text-grey-darker">
                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="-mx-3 md:flex md:flex-col mt-10 mb-2">
                                <div className="ml-10">
                                    <div className="md:flex md:flex-row px-3 mb-6 md:mb-0">
                                        <div className="md:w-1/3 uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >Schedule input</div>
                                    </div>
                                    <div className="-mx-3 md:flex mb-2">
                                        <div className="flex flex-col">
                                            <label className="m-2 uppercase text-grey-darker text-xs pl-10 font-bold">&nbsp;</label>
                                            <label className="m-2 uppercase text-grey-darker text-xs pl-10 font-bold">Open</label>
                                            <label className="m-2 uppercase text-grey-darker text-xs pl-10 font-bold">Close</label>
                                        </div>
                                        <div className="grid-cols-2">
                                            <label className="m-2 uppercase text-grey-darker text-xs pl-10 font-bold">  Monday</label>
                                            <Field name="schedule.monday.open" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                            <Field name="schedule.monday.close" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                        </div>
                                        <div className="grid-cols-2">
                                            <label className="m-2 uppercase text-grey-darker text-xs pl-10 font-bold">  Tuesday</label>
                                            <Field name="schedule.tuesday.open" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                            <Field name="schedule.tuesday.close" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                        </div>
                                        <div className="grid-cols-2">
                                            <label className="m-2 uppercase text-grey-darker text-xs pl-10 font-bold">  Wednesday</label>
                                            <Field name="schedule.wednesday.open" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                            <Field name="schedule.wednesday.close" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                        </div>
                                        <div className="grid-cols-2">
                                            <label className="m-2 uppercase text-grey-darker text-xs pl-10 font-bold">  Thursday</label>
                                            <Field name="schedule.thursday.open" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                            <Field name="schedule.thursday.close" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                        </div>
                                        <div className="grid-cols-2">
                                            <label className="m-2 uppercase text-grey-darker text-xs pl-10 font-bold">  Friday</label>
                                            <Field name="schedule.friday.open" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                            <Field name="schedule.friday.close" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                        </div>
                                        <div className="grid-cols-2">
                                            <label className="m-2 uppercase text-grey-darker text-xs pl-10 font-bold">  Saturday</label>
                                            <Field name="schedule.saturday.open" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                            <Field name="schedule.saturday.close" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                        </div>
                                        <div className="grid-cols-2">
                                            <label className="m-2 uppercase text-grey-darker text-xs pl-10 font-bold">  Sunday</label>
                                            <Field name="schedule.sunday.open" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                            <Field name="schedule.sunday.close" type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 mb-6 mt-3 md:mb-0">
                                <button type="submit" className="mp-button">
                                    Create Worker
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
