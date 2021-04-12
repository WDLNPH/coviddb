import {FieldArray, useFormikContext} from "formik";
import {SmartField as Field} from "./FormHelpers";
import {AutocompleteRegionValues} from "./AutocompleteRegion";
import {Badge, Option} from "../../pages/Person/Form/PatientForm";
import React, {useEffect, useRef, useState} from "react";
import {readAllGroupZones} from "../../../api";
import {Dropdown} from "./FormHelpers";

export default function () {
    const [groupZones, setGroupZones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("");
    const inputRef = useRef();
    const {values, setFieldValue} = useFormikContext();
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
        <>
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-first-name">
                        First Name
                    </label>
                    <Field
                        name="first_name"
                        className="mp-form-field"
                        id="grid-first-name" type="text" placeholder="Jane"/>
                </div>
                <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <Field
                        name="last_name"
                        className="mp-form-field"
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
                        className="mp-form-field"
                        id="grid-city" type="text" placeholder=""/>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        Date of Birth
                    </label>
                    <Field
                        name="dob"
                        className="mp-form-field"
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
                        className="mp-form-field"
                        id="grid-address" type="text" placeholder="street number street name"/>
                </div>
                <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-zip">
                        Postal Code
                    </label>
                    <Field
                        name="postal_code"
                        className="mp-form-field"
                        id="grid-zip" type="text" placeholder="A1A 1A1"/>
                    <AutocompleteRegionValues onUpdate={regions => {
                        if (regions.length > 0) {
                            setFieldValue('postal_code_id', regions[0].postal_code_id)
                            setFieldValue('city', regions[0].city);
                            setFieldValue('region', regions[0].region);
                            setFieldValue('province', regions[0].province)
                            setFieldValue('citizenship', 'Canada')
                        } else {
                            setFieldValue('postal_code_id', null)
                            setFieldValue('city', '');
                            setFieldValue('region', '');
                            setFieldValue('province', '')
                            setFieldValue('citizenship', '')
                        }
                    }}/>
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
                        className="mp-form-field"
                        id="grid-city" type="text" placeholder="Montreal"/>
                </div>
                <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-state">
                        Province
                    </label>
                    <Dropdown name="province" id="province" disabled>
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
                    </Dropdown>
                </div>
                <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-citizenship">
                        Citizenship
                    </label>
                    <Field
                        disabled
                        name="citizenship"
                        className="mp-form-field"
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
                        className="mp-form-field"
                        id="grid-city" type="text" placeholder=""/>
                </div>
                <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-zip">
                        Phone Number
                    </label>
                    <Field
                        name="phone"
                        className="mp-form-field"
                        id="grid-zip" type="text" placeholder=""/>
                </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
                {!loading && (
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            Group Zones
                        </label>
                        <FieldArray name="group_zones">
                            {({push, remove, pop}) => (
                                <div className="flex flex-col items-center relative">
                                    <div className="w-full">
                                        <div
                                            className="mp-form-field">
                                            <div className="flex flex-auto flex-wrap">
                                                {values.group_zones.map((groupZoneId, idx) => <Badge
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
                                        className="absolute top-14 shadow bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto">
                                        <div className="flex flex-col w-full">
                                            {groupZones.filter(gz => filter.length > 0
                                                && gz.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
                                                && !values.group_zones.includes(gz.group_id))
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
                )}
            </div>
        </>
    );
}
