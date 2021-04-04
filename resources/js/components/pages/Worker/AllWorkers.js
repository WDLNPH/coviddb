import React from 'react';


export default function () {
    function addChild() {       // this.setState({ inputLinkClicked: true})
    }
    function handleSubmit() {
        alert('A form was submitted ' );
    }
    return  (       <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        id="grid-first-name" type="text" placeholder="Jane"/>

                </div>
                <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-last-name" type="text" placeholder="Doe"/>
                </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        Poste
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city" type="text" placeholder=""/>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        Employee ID
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city" type="date" placeholder=""/>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        Facility Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city" type="text" placeholder=""/>
                </div>
                <div className="md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-zip">
                        Facility ID
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-zip" type="text" placeholder=""/>
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
                            <input type="time"
                                   className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                            <input type="time"
                                   className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Tuesday</label>
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Wednesday</label>
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Thursday</label>
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Friday</label>
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Saturday</label>
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
                    </div>
                    <div className="grid-cols-2">
                        <label className="m-2 uppercase  text-grey-darker text-xs pl-10 font-bold">  Sunday</label>
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" />
                        <input type="time"
                               className="m-2 appearance-none block w-50 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"/>
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
