import React from 'react';
import {Formik, Form} from 'formik';
import {DeleteButton, SmartField as Field, withCrud} from "../../common/forms/FormHelpers";
import {NavLink} from "react-router-dom";
import * as Yup from "yup";

const MesSchema = Yup.object().shape({
    messages:  Yup.string()
        .required('Message Required')
});
export default withCrud(MessagesForm);

function MessagesForm({handleSubmit, handleRemove, messages}) {
    return  (
        <>
            <div className="mp-page-header">
                <h1 className="mp-page-header-title">{messages ? `(#${messages.messages_id}) Edit Messages` : 'Create Messages'}</h1>
                <NavLink to={`/messages`} className="mp-button w-max">{'<'} Back to Messages</NavLink>
            </div>
            <Formik initialValues={{
                messages: messages ? messages.messages : '',
            }}
                    validationSchema={MesSchema}
                    onSubmit={handleSubmit}>
                <Form>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                    Name of Message
                                </label>
                                <Field name="messages"
                                       className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                       id="messages" type="text" placeholder="Zone 1 moving to severity level 3"/>
                            </div>
                        </div>

                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <button type="submit" className="mp-button">
                                Submit
                            </button>
                            {messages ? (
                                <DeleteButton onClick={handleRemove}/>
                            ): null}
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

