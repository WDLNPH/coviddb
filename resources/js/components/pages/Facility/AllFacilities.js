import React from 'react';
import {Field} from "formik";

export default function ()   {

function handleSubmit() {
    alert('A form was submitted ' );
}
return  (       <form onSubmit={handleSubmit}>
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-first-name">
                    Name of Facility
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    id="grid-first-name" type="text" placeholder="Hospital St Justine "/>

            </div>

            <div className="md:flex w-2/5 mb-2 ml-2">
                <div className="md:w-1/2 px-3 w-96">
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Type of facility</label>
                    <div className="relative">
                        <select name="province"
                                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded">
                            <option>Clinic</option>
                            <option>Hospital</option>
                            <option>Special Installment</option>

                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/4 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-last-name">
                    Phone Number
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-last-name" type="text" placeholder="(xxx) xxx - xxxx"/>
            </div>

            <div className="md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-last-name">
                    Website
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-last-name" type="text" placeholder="https://"/>
            </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
            <div className="-mx-3 md:flex ml-1">
                <div className="md:w-5/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Address
                    </label>
                    <input name="address" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="street number street name"/>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">City</label>
                    <input name="city" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="Montreal"/>
                </div>
                <div className="md:w-1/3 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Postal Code</label>
                    <input name="postal_code" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="A1A 1A1"/>
                </div>
            </div>
            <div className="md:flex w-2/5 mb-2 ml-2">
                <div className="md:w-1/2 px-3 w-96">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Province</label>
                    <div className="relative">
                        <select name="province" class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded">
                            <option>Alberta</option>
                            <option>British Columbia</option>
                            <option>Manitoba</option>
                            <option>New Brunswick</option>
                            <option>Newfoundland and Labrador</option>
                            <option>Nova Scotia</option>
                            <option>Ontario</option>
                            <option>Prince Edward Island</option>
                            <option>Quebec</option>
                            <option>Saskatchewan</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <button type="submit" class="bg-transparent hover:bg-grey text-grey-dark font-semibold hover:text-white py-2 px-4 border border-grey hover:border-transparent rounded mr-2"> Submit </button>
        </div>
    </div>
</form>)

}
