import React from 'react';
import {Field, Formik} from 'formik';


export default function ({workerRequestPromise}) {
    async function handleSubmit(values) {
        try {
            const {data} = await workerRequestPromise(values);
            console.log(data);
            alert("done boi1")
        } catch (exception) {
            // skip
        }
    }
    return  (
        <>
            <Formik initialValues={{
                position: '',
                first_name: '',
                last_name: '',
                facility_name: '',
                health_center_id: '', // Could represent a city_id
                schedule: '',

            }}
                    onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">First Name</label>
                    <Field name="first_name"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="Jane"/>
                </div>
                <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Last Name</label>
                    <Field name="lastt_name"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="Doe"/>
                </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Position</label>
                    <Field name="position"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder=""/>
                </div>

                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Facility Name</label>
                    <Field name="facility_name"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder=""/>
                </div>
                <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Facility ID</label>
                    <Field name="health_center_id"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder=""/>
                </div>
            </div>

            <div className="-mx-3 md:flex md:flex-col mt-10 mb-2">
                <div className="ml-10">
                <div className="md:flex md:flex-row px-3 mb-6 md:mb-0">
                    <div className="md:w-1/3 uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >Schedule input</div>
                </div>
                <div className="-mx-3 md:flex mb-2">
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Monday</label>
                            <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                            <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Tuesday</label>
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Wednesday</label>
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Thursday</label>
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Friday</label>
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Saturday</label>
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Sunday</label>
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time" className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                </div>
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
