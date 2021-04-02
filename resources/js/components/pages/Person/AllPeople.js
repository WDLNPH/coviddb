import React from 'react';
//this.state = {        inputLinkClicked: false}

 //   function addChild(){        this.setState({ inputLinkClicked: true})    }

    function handleSubmit() {
        alert('A form was submitted ' );
    }

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
                    Email Address
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city" type="text" placeholder=""/>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-city">
                    Date of Birth
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city" type="date" placeholder=""/>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-city">
                    Medicare ID
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city" type="text" placeholder=""/>
            </div>
            <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-zip">
                    Citizenship
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-zip" type="text" placeholder="Canada"/>
            </div>
        </div>

        <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-city">
                    Address
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city" type="text" placeholder="street number street name"/>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-city">
                    City
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city" type="text" placeholder="Montreal"/>
            </div>
            <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-state">
                    Province
                </label>
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                        id="grid-state">
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
                    <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-zip">
                    Postal Code
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-zip" type="text" placeholder="A1A 1A1"/>
            </div>
            <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-zip">
                    Phone Number
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-zip" type="text" placeholder=""/>
            </div>
        </div>

        <p className="text-red text-xs italic">Please fill out this field to the best of your ability</p>

        <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-city">
                    Spouse Name
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city" type="text" placeholder=""/>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-city">
                    Parent 1
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city" type="text" placeholder="Parent 1 full name"/>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-city">
                    Parent 2
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city" type="text" placeholder="Parent 2     full name"/>
            </div>
        </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <button onClick={addChild()}    type="button"
                        className="bg-transparent hover:bg-grey text-grey-dark font-semibold hover:text-white py-2 px-4 border border-grey hover:border-transparent rounded mr-2"> Add a child section
                </button>
            </div>
        <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-city">
                    Child 1
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city" type="text" placeholder=""/>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-city">
                    Date of Birth
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city" type="date" placeholder="Parent 1 full name"/>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                       htmlFor="grid-city">
                    SIN?
                </label>
                <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city" type="text" placeholder="Parent 2     full name"/>
            </div>
        </div >
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <button type="submit" class="bg-transparent hover:bg-grey text-grey-dark font-semibold hover:text-white py-2 px-4 border border-grey hover:border-transparent rounded mr-2"> Submit </button>
            </div>
        </div>
</form>)

}
