import React from 'react';
import {Formik, Form} from 'formik';
import {SmartField as Field} from "../../common/forms/FormHelpers";
import {NavLink} from "react-router-dom";
import * as Yup from "yup";

const RecSchema = Yup.object().shape({
    recommendation:  Yup.string()
        .required('Rec Required')
});

export default function ({recommendationsRequestPromise, recommendation}) {
    async function handleSubmit(values) {
        try {
            console.log("op");
            const {data} = await recommendationsRequestPromise(values);
            console.log(data);
            alert("done boi")
        } catch (exception) {
            // skip
            console.log(exception);
        }
    }
    return  (
        <>
            <div className="mp-page-header">
                <h1 className="mp-page-header-title">{recommendation ? `(#${recommendation.recommendation_id}) Edit Recommendation` : 'Create Recommendations'}</h1>
                <NavLink to={`/recommendations`} className="mp-button w-max">{'<'} Back to Recommendations</NavLink>
            </div>
            <Formik initialValues={{
                recommendation: recommendation ? recommendation.recommendation : '',
            }}
                    validationSchema={RecSchema}
                    onSubmit={handleSubmit}>
                <Form>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                    Name of Recommendations
                                </label>
                                <Field name="recommendation"
                                       className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                       id="recommendation" type="text" placeholder="wash your hands before eating"/>
                            </div>
                        </div>

                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <button type="submit" className="mp-button"> Submit</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )

}

