import React from 'react';
import {Formik} from 'formik';
import {SmartField as Field} from "../../common/forms/FormHelpers";
import {NavLink} from "react-router-dom";
import {Dropdown} from "../../common/forms/FormHelpers";
import * as Yup from "yup";




const GZSchema = Yup.object().shape({
    name:  Yup.string()
        .min(2, 'Group Zone Name Too Short!')
        .max(50, 'Group Zone Name Too Long!')
        .required('Group Zone Name Required'),
    activity:  Yup.string()
        .required('Activity Required')
});





export default function ({groupeZoneRequestPromise, groupZone}) {
    async function handleSubmit(values) {
        try {
            const {data} = await groupeZoneRequestPromise(values);
            console.log(data);
            alert("done boi")
        } catch (exception) {
            // skip
        }
    }
    return  (
        <>
            <div className="mp-page-header">
                <h1 className="mp-page-header-title">{groupZone ? `(#${groupZone.group_id}) ${groupZone.name}` : 'Create Group Zone'}</h1>
                <NavLink to={`/groupzones`} className="mp-button w-max">{'<'} Back to Group Zones</NavLink>
            </div>
            <Formik initialValues={{
                name: groupZone ? groupZone.name : '',
                activity: groupZone ? groupZone.activity : '',
            }}
                    validationSchema={GZSchema}
                    onSubmit={handleSubmit}>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-first-name">
                                    Name of Group Zone
                                </label>
                                <Field name="name"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="grid-first-name" type="text" placeholder="Hospital St Justine "/>

                            </div>

                            <div className="md:flex w-2/5 mb-2 ml-2">
                                <div className="md:w-1/2 px-3 w-96">
                                    <label
                                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Type of Activity</label>
                                    <Dropdown name="activity">
                                        <option>Select a category</option>
                                        <option value="Education">Education</option>
                                        <option value="House of Worship">House of Worship</option>
                                        <option value="Shopping">Shopping</option>
                                        <option value="Sports">Sports</option>
                                    </Dropdown>
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

