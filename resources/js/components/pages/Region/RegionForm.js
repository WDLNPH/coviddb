import React from 'react';
import {Field, Formik} from 'formik';

export default function ({regionRequestPromise}) {
    async function handleSubmit(values) {
        try {
            const {data} = await regionRequestPromise(values);
            console.log(data);
            alert("done boi")
        } catch (exception) {}
    }
    return  (
        <>
            <Formik initialValues={{
                name: '',
                alertLevel: '',
            }}
                    onSubmit={handleSubmit}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-first-name">
                                Name of Region
                            </label>
                            <Field name="name"
                                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                   id="grid-first-name" type="text" placeholder=""/>

                        </div>

                        <div className="md:flex w-2/5 mb-2 ml-2">
                            <div className="md:w-1/2 px-3 w-96">
                                <label
                                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Type of Activity</label>
                                <div className="relative">
                                    <select name="alertLevel"
                                            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded">
                                        <option>1 - </option>
                                        <option>2 - </option>
                                        <option>3 - </option>
                                        <option>4 - </option>

                                    </select>
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
