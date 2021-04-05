import React, {useState, useEffect, useRef} from 'react';
import {Field, FieldArray, Form, Formik, useFormikContext} from 'formik';
import {autocompleteRegions, readAllGroupZones} from "../../../../api";

const AutocompleteRegionValues = () => {
    // Grab values and submitForm from context
    const {values, setFieldValue} = useFormikContext();
    const [search, updateSearch] = useState("");
    const [results, updateResults] = useState(results);

    useEffect(() => {
        async function loadRegionValues(postalCode) {
            try {
                const {data} = await autocompleteRegions(postalCode);
                if (data.length > 0) {
                    setFieldValue('city', data[0].region_name);
                    setFieldValue('province', 'QC')
                    setFieldValue('citizenship', 'Canada')
                    setFieldValue('region_id', 121);
                } else {
                    setFieldValue('city', '');
                    setFieldValue('province', '')
                    setFieldValue('citizenship', '')
                    setFieldValue('region_id', null);
                }
            } catch (e) {
                // skip
            }
        }

        // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
        if (values.postal_code.length >= 3 && values.postal_code.slice(0, 3) !== search) {
            updateSearch(values.postal_code.slice(0, 3));
            loadRegionValues(values.postal_code.slice(0, 3));
        }
    }, [values]);
    return null;
};

export default function ({patientRequestPromise}) {
    async function handleSubmit(values) {
        try {
            const {data} = await patientRequestPromise(values);
            alert("done boi")
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
                phone: ''
            }}
            onSubmit={handleSubmit}>
                <Form>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <Field
                                    name="first_name"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="grid-first-name" type="text" placeholder="Jane"/>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <Field
                                    name="last_name"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-last-name" type="text" placeholder="Doe"/>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-city">
                                    Medicare ID
                                </label>
                                <Field
                                    name="medicare"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-city" type="text" placeholder=""/>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-city">
                                    Date of Birth
                                </label>
                                <Field
                                    name="dob"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-city" type="date" placeholder=""/>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-address">
                                    Address
                                </label>
                                <Field
                                    name="address"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-address" type="text" placeholder="street number street name"/>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-zip">
                                    Postal Code
                                </label>
                                <Field
                                    name="postal_code"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-zip" type="text" placeholder="A1A 1A1"/>
                                <AutocompleteRegionValues/>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-city">
                                    City
                                </label>
                                <Field
                                    disabled
                                    name="city"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-city" type="text" placeholder="Montreal"/>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-state">
                                    Province
                                </label>
                                <div className="relative">
                                    <Field
                                        disabled
                                        as="select"
                                        name="province"
                                        className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                                        id="grid-state">
                                        <option value="AB">Alberta</option>
                                        <option value="BC">British Columbia</option>
                                        <option value="MN">Manitoba</option>
                                        <option value="NB">New Brunswick</option>
                                        <option value="NF">Newfoundland and Labrador</option>
                                        <option value="NS">Nova Scotia</option>
                                        <option value="ON">Ontario</option>
                                        <option value="PE">Prince Edward Island</option>
                                        <option value="QC">Quebec</option>
                                        <option value="SK">Saskatchewan</option>
                                    </Field>
                                    <div className="pointer-events-none absolute right-1 top-3 pin-y pin-r flex items-center px-2 text-grey-darker">
                                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-citizenship">
                                    Citizenship
                                </label>
                                <Field
                                    disabled
                                    name="citizenship"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-citizenship" type="text" placeholder="Canada"/>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-city">
                                    Email Address
                                </label>
                                <Field
                                    name="email"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-city" type="text" placeholder=""/>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                       htmlFor="grid-zip">
                                    Phone Number
                                </label>
                                <Field
                                    name="phone"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-zip" type="text" placeholder=""/>
                            </div>
                        </div>
                        <div className="md:w-1/2 mb-6 mt-3 md:mb-0">
                            <button type="submit" className="mp-button">
                                Create Patient
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export function PersonGroupZoneForm({personGZRequestPromise}) {
    const [groupZones, setGroupZones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("");
    const inputRef = useRef();

    async function handleSubmit(values) {
        try {
            const {data} = await personGZRequestPromise(values);
            console.log(data);
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
        <Formik initialValues={{groupZones: []}} onSubmit={handleSubmit}>
            {({values}) => (
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-first-name">
                                Group Zones
                            </label>
                            <FieldArray name="groupZones">
                                {({push, remove, pop}) => (
                                    <div className="flex flex-col items-center relative">
                                        <div className="w-full">
                                            <div
                                                className="my-2 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u">
                                                <div className="flex flex-auto flex-wrap">
                                                    {values.groupZones.map((groupZoneId, idx) => <Badge
                                                        onClick={() => remove(idx)}
                                                        name={groupZones.find(g => parseInt(g.group_id) === parseInt(groupZoneId)).name}/>)}
                                                    <div className="flex-1">
                                                        <input
                                                            onKeyDown={e => {
                                                                if (e.keyCode === 8 && filter === "") {
                                                                    pop();
                                                                }
                                                            }}
                                                            ref={inputRef}
                                                            value={filter}
                                                            onChange={(e) => setFilter(e.target.value)}
                                                            className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute top-14 shadow bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
                                            <div className="flex flex-col w-full">
                                                {groupZones.filter(gz => filter.length > 0
                                                    && gz.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
                                                    && !values.groupZones.includes(gz.group_id))
                                                    .map(gz => <Option onClick={() => {
                                                        push(gz.group_id);
                                                        setFilter("");
                                                        inputRef.current.focus();
                                                    }} name={gz.name}/>)}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </FieldArray>
                        </div>
                    </div>
                    <div className="md:w-1/2 mb-6 mt-3 md:mb-0">
                        <button type="submit" className="mp-button">
                            Update GroupZones
                        </button>
                    </div>
                </div>
            )}
        </Formik>
    )
}

function Badge({name, onClick}) {
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

function Option({name, onClick}) {
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
