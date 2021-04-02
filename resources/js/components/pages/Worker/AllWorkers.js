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

            <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <div className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                        Time
                    </div>
                    <div className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                        Start<br/>
                    </div>
                    <div className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                        End
                    </div>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        Monday
                    </label>
                    <input type="time"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city" />
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        Tuesday
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city" type="text" placeholder="time"/>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        Wednesday
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city" type="text" placeholder="time"/>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        Thursday
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city" type="text" placeholder="time"/>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        Friday
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city" type="text" placeholder="time"/>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        Saturday
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city" type="text" placeholder="time"/>
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                           htmlFor="grid-city">
                        Sunday
                    </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city" type="text" placeholder="time"/>
                </div>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <button type="submit" class="bg-transparent hover:bg-grey text-grey-dark font-semibold hover:text-white py-2 px-4 border border-grey hover:border-transparent rounded mr-2"> Submit </button>
            </div>
        </div>
    </form>)

}
