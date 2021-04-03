import React from 'react';
import {Field, Formik} from 'formik';
import {NavLink, Route, Switch} from "react-router-dom";
import CreatePatient from "./CreatePatient";
import EditPatient from "./EditPatient";
import {Redirect, useRouteMatch} from "react-router";


export default function ({patientRequestPromise}) {
    async function handleSubmit(values) {
        try {
            const {data} = await patientRequestPromise(values);
            console.log(data);
            alert("done boi")
        } catch (exception) {
           // skip
        }
    }
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreatePatient}/>
                <Route path={`${match.url}/:patientId`} component={EditPatient}/>
                <Route render={() => (
                    <>
                        <NavLink to={`${match.url}/create`}>Create a new patient</NavLink>
                        to be continued
                    </>
                )}/>
            </Switch>
        </>
    )

}
