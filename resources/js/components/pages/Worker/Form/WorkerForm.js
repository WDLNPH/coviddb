import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from 'formik';
import PersonSectionForm from "../../../common/forms/PersonSectionForm";
import {readAllFacilities, readAllPositions} from "../../../../api";
import {Dropdown} from "../../../common/forms/FormHelpers";


export default function ({workerRequestPromise, worker}) {
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
                first_name: worker ? worker.first_name : '',
                last_name: worker ? worker.last_name : '',
                medicare: worker ? worker.medicare : '',
                dob: worker ? worker.dob : '',
                address: worker ? worker.address : '',
                postal_code: worker ? worker.postal_code : '',
                postal_code_id: worker ? worker.postal_code_id : '',
                city: worker ? worker.city : '', // Could represent a city_id
                province: worker ? worker.province : '',
                region: worker ? worker.region : '',
                citizenship: worker ? worker.citizenship : '',
                email: worker ? worker.email : '',
                phone: worker ? worker.phone : '',
                group_zones: worker && ![null,"",undefined].includes(worker.group_zones) ? worker.group_zones.split(',') : [],
                position_id: worker ? worker.position_id : '',
                health_center_id: worker ? worker.health_center_id : '',
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
                                {loadingP && (
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Position</label>
                                        <Dropdown name="position">
                                            {positions.map(position => (
                                                <option value={position.id}>
                                                    {position.position}
                                                </option>
                                            ))}
                                        </Dropdown>
                                    </div>
                                )}
                                {loadingF && (
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Facility Name</label>
                                        <Dropdown name="health_center_id">
                                            <option>Select a facility</option>
                                            {facilities.map(facility => (
                                                <option value={facility.health_center_id}>
                                                    {facility.name}
                                                </option>
                                            ))}
                                        </Dropdown>
                                    </div>
                                )}
                            </div>

                            <div className="-mx-3 md:flex mb-2">
                                <div className="">
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
                                    {worker ? 'Update' : 'Create'} Worker
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
