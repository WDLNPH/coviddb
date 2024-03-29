import React, {useEffect, useState} from 'react';
    import {readOneRegion, updateRegion} from "../../../api";
import {Formik, Field, Form} from "formik";
import {useHistory, useParams} from "react-router";
import {toast} from "react-toastify";
import {DeleteButton} from "../../common/forms/FormHelpers";

const ALERT_LEVEL_ONE = 1;
const ALERT_LEVEL_TWO = 2;
const ALERT_LEVEL_THREE = 3;
const ALERT_LEVEL_FOUR = 4;

export function getAlertColor(alertLevel) {
    return ALERTS[parseInt(alertLevel)]?.background;
}

export const ALERTS = {
    [ALERT_LEVEL_ONE]: {
        stringName: 'Level 1: Vigilance',
        header: 'Level 1',
        description: 'Vigilance',
        measures: 'Basic Measures',
        background: 'bg-green-100',
        restrictions: [
            'No restrictions',
            'Avoid unnecessary social contact'
        ]
    },
    [ALERT_LEVEL_TWO]: {
        stringName: 'Level 2: Early Warning',
        header: 'Level 2',
        description: 'Early Warning',
        measures: 'Strengthened Basic Measures',
        background: 'bg-yellow-100',
        restrictions: [
            'Maximum 250 people in public spaces',
            'No curfew',
        ]
    },
    [ALERT_LEVEL_THREE]: {
        stringName: 'Level 3: Moderate Alert',
        header: 'Level 3',
        description: 'Moderate Alert',
        measures: 'Intermediate Measures',
        background: 'bg-yellow-200',
        restrictions: [
            'Maximum 25 people in public spaces',
            'Curfew from 9:30 p.m to 5 a.m.',
            'Travel prohibited to Yellow (Level-2) zones',
        ]
    },
    [ALERT_LEVEL_FOUR]: {
        stringName: 'Level 4: Maximum Alert',
        header: 'Level 4',
        description: 'Maximum Alert',
        measures: 'Maximum Measures',
        background: 'bg-red-300',
        restrictions: [
            'Access public spaces prohibited',
            'Curfew from 9:30 p.m to 5 a.m.',
            'Travel prohibited to Yellow (Level-2) zones',
            'Hybrid teaching',
        ]
    },
}

const ALERT_LEVEL_STRINGS = {
    [ALERT_LEVEL_ONE]: 'Level 1: Vigilance',
    [ALERT_LEVEL_TWO]: 'Level 2: Early Warning',
    [ALERT_LEVEL_THREE]: 'Level 3: Moderate Alert',
    [ALERT_LEVEL_FOUR]: 'Level 4: Maximum Alert'
}
export default function () {
    const [region, setRegion] = useState(null);
    const [loading, setLoading] = useState(false);
    const {regionId} = useParams();
    const history = useHistory();


    async function handleRemove() {
        try {
            const {data} = await deleteRegion(regionId);
            alert("done boi2")
            history.push('/regions')
        } catch (exception) {
            // skip
            alert(exception)
        }
    }
    async function handleSubmit(values) {
        try {
            const {data} = await updateRegion(regionId, values);
            toast.info("region updated");
            history.push('/regions')
        } catch (exception) {
            // skip
        }
    }
    useEffect(() => {
            async function loadRegion() {
            setLoading(true);
            try {
                    const {data} = await readOneRegion(parseInt(regionId))
                    setRegion(data)
            } catch (e) {
                // skip
                toast.error("Could not find region");
                history.push('/regions');
            }
            setLoading(false);
        }
        loadRegion();
        // fetch the patient object from the db
    }, [regionId]);

    return loading ? <>please wait</> : (
        <Formik
            initialValues={{
                alert_id: region ? region.alert_id : ALERT_LEVEL_ONE,
            }}
            onSubmit={handleSubmit}
        >
            {({values}) => (
                <Form>
                    <div className="custom-number-input h-10 w-96">
                        <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">Counter
                            Input
                        </label>
                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <Field name="alert_id">
                                {({field, form: {setFieldValue}}) => {
                                    function increment() {
                                        if ((field.value + 1) <= ALERT_LEVEL_FOUR) {
                                            setFieldValue(field.name, field.value + 1);
                                        }
                                    }
                                    function decrement() {
                                        if ((field.value - 1) >= ALERT_LEVEL_ONE) {
                                            setFieldValue(field.name, field.value - 1);
                                        }
                                    }
                                    return (
                                        <>
                                            <a
                                                onClick={decrement}
                                                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                                <span className="m-auto text-2xl font-thin">−</span>
                                            </a>
                                            <input
                                                disabled
                                                onChange={() => {}}
                                               type="text"
                                               className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                               name="custom-input-number" value={ALERT_LEVEL_STRINGS[field.value]}/>
                                            <a
                                                onClick={increment}
                                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </a>
                                        </>
                                    );
                                }}
                            </Field>
                        </div>
                    </div>
                    <div
                        className="flex flex-col  items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0"
                    >
                        {[ALERT_LEVEL_ONE,ALERT_LEVEL_TWO,ALERT_LEVEL_THREE,ALERT_LEVEL_FOUR].map(alertCode => (
                            <section className={`mp-alert-section ${ALERTS[alertCode].background} ${values.alert_id === alertCode ? 'border-2 border-gray-400' : ''}`}>
                                <div className="flex-shrink-0">
                                    {/*:className="plan.name == 'Basic' ? 'text-green-500' : ''"*/}
                                    <span className="text-4xl font-medium tracking-tight">
                                        {ALERTS[alertCode].header}
                                    </span>
                                    <span className="text-gray-400"></span>
                                </div>
                                <div className="flex-shrink-0 pb-6 space-y-2 border-b">
                                    <h2 className="text-2xl font-normal">{ALERTS[alertCode].description}</h2>
                                    <p className="text-sm text-gray-400">{ALERTS[alertCode].measures}</p>
                                </div>

                                <ul className="flex-1 space-y-4">
                                    {ALERTS[alertCode].restrictions.map(restriction =>(
                                        <li className="flex items-start">
                                            <span className="ml-3 text-base font-medium">- {restriction}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex-shrink-0 pt-4">
                                </div>
                        </section>
                            ))}
                    </div>
                    <div className="mt-3 md:w-1/2 px-3 mb-6 md:mb-0">
                        <button type="submit" className="mp-button">
                            Submit
                        </button>
                        {region ? (
                            <DeleteButton onClick={handleRemove}/>
                        ): null}
                    </div>
                </Form>
            )}
        </Formik>
    );
}
