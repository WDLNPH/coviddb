import React, {useEffect, useState} from 'react';
import {fetchStats} from '../../../api';

export default function () {
    const [stats, setStats] = useState();
    useEffect(() => {
        async function loadStats() {
            const {data} = await fetchStats();
            setStats(data);
        }
        loadStats();
    }, []);

    return (
        <main
            className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
            duration-500 ease-in-out overflow-y-auto">
            <div className="mx-10 my-2">
                <h2 className="my-4 text-4xl font-semibold dark:text-gray-400">
                    Welcome Back, {user.first_name}!
                </h2>

                <div className="pb-2 flex items-center justify-between text-gray-600
                    dark:text-gray-400 border-b dark:border-gray-600">
                    <div>
                        <span>
                            Role:&nbsp;
                            <span className="text-green-500 dark:text-green-200 capitalize">
                                {user.role}
                            </span>&nbsp;
                        </span>
                    </div>
                </div>

                {(user.role === 'patient' && stats?.recently_tested_positive && stats?.missing_forms?.length > 0) && (
                    <div className="my-4 flex px-4 py-4 justify-between bg-white
                        dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer bg-yellow-300">
                        <div className="flex flex-1 justify-between">
                            <div className="mx-1 flex flex-col justify-between">
                                <h1 className="text-2xl">Follow-Up Form Required</h1>
                                <p>
                                    We have not been able to retrieve all follow up forms for the last days since your positive result.
                                    Please fill out the required documents
                                </p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <a className="mp-button">
                                    Fill-out Follow Up Form
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* If the last test came positive */}
                {user.role === 'patient' && (
                        <div className={`my-4 flex px-4 py-4 justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer ${stats?.recently_tested_positive ? 'bg-red-400' : 'bg-green-300'}`}>
                            <div className="flex flex-1 justify-between">
                                <div className="mx-1 flex flex-1 flex-col justify-between">
                                    <h1 className="text-2xl">COVID-19 Test: {stats?.recently_tested_positive ? 'Positive' : 'Negative'}</h1>
                                    <p>Sick person under home isolation is asked to follow the instructions below to prevent the spread of COVID-19 to other people around him/her</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <a className="mp-button">
                                        See Recommendations
                                    </a>
                                </div>
                            </div>
                        </div>
                )}

                <div className="-mx-2 pb-8 flex flex-row">
                    <div className="mx-1 flex-1 flex-col flex px-4 py-4 justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">
                        <div className="mx-1 flex justify-between">
                            <h1 className="text-2xl">Person Info</h1>
                        </div>
                        <PersonInfoCard/>
                    </div>
                    <div className="mx-1 flex-1 flex-col flex px-4 py-4 justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">
                        <div className="mx-1 flex justify-between">
                            <h1 className="text-2xl">Last Diagnostic</h1>
                        </div>
                        {user.role === 'worker' ? (
                            <WorkerLastDiagnostics diags={stats?.diagnostics_handled?.length > 0 ? stats.diagnostics_handled : []}/>
                        ) : user.role === 'patient' ? (
                            <PatientLastDiagnostics diags={stats?.diagnostics_taken?.length > 0 ? stats.diagnostics_taken : []}/>
                        ) : user.role === 'admin' ? (
                            <LastRegionUpdates/>
                        ) : null}
                    </div>
                </div>

                <div className="-mx-2 pb-8 flex flex-row">
                    <div className={`mx-1 flex-1 flex-col flex px-4 py-4 justify-between bg-white  dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer ${stats?.alert_color}`}>
                        <div className="mx-1 flex justify-between">
                            <h1 className="text-2xl">Current Alert Level</h1>
                        </div>
                        <div className="mx-1 mt-2 flex-shrink-0">
                            {/*:className="plan.name == 'Basic' ? 'text-green-500' : ''"*/}
                            <span className="text-4xl font-medium tracking-tight">
                                {stats?.alert_info}
                            </span>
                            <span className="text-gray-400"></span>
                        </div>
                        <div className="mx-1 flex-shrink-0 pb-6 space-y-2">
                            <h2 className="text-2xl font-normal">{stats?.region_name}</h2>
                            <p className="text-sm text-gray-400">{stats?.city}</p>
                        </div>
                    </div>
                    <div className="mx-1 flex-1 flex-col flex px-4 py-4 justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">
                        <div className="mx-1 flex justify-between">
                            <h1 className="text-2xl">Group Zone Situation</h1>
                        </div>
                        <GroupZoneBox/>
                    </div>
                </div>
            </div>
        </main>
    );
}

function GroupZoneBox() {
    return  (
        <>

        </>
    );
}
function WorkerLastDiagnostics({diags}) {
    return (
        <div className="flex flex-1 flex-col">
            <div className="my-2 border-b flex capitalize text-gray-600 dark:text-gray-400">
                <span className="flex flex-1 uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Date
                </span>
                <span className="flex flex-1 uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 dark:text-gray-200">
                    Patient Name
                </span>
                <span className="flex flex-1 uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 dark:text-gray-200">
                    Result
                </span>
            </div>
            {diags.map(diag => (
                <div className="my-2 flex capitalize text-gray-600 dark:text-gray-400">
                    <span className="flex flex-1">{diag.date}</span>
                    <span className="flex flex-1 text-black dark:text-gray-200">
                        {diag.patient_name}
                                    </span>
                    <span className="flex flex-1 text-black dark:text-gray-200">
                        {diag.result ? 'Positive' : 'Negative'}
                    </span>
                </div>
            ))}
        </div>
    );
}
function PatientLastDiagnostics({diags}) {
    return (
        <div className="flex flex-1 flex-col">
            <div className="my-2 border-b flex capitalize text-gray-600 dark:text-gray-400">
                <span className="flex flex-1 uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Date
                </span>
                <span className="flex flex-1 uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 dark:text-gray-200">
                    Result
                </span>
            </div>
            {diags.map(diag => (
                <div className="my-2 flex capitalize text-gray-600 dark:text-gray-400">
                    <span className="flex flex-1">{diag.date}</span>
                    <span className="flex flex-1 text-black dark:text-gray-200">
                        {diag.result ? 'Positive' : 'Negative'}
                    </span>
                </div>
            ))}
        </div>
    );
}
function LastRegionUpdates() {
    return null;
}
function PersonInfoCard() {
    return (
        <div className="flex justify-between">
            <div className="ml-4 flex flex-col capitalize text-gray-600 dark:text-gray-400">
                <span className="mt-2">Name</span>
                <span className="mt-2">Medicare</span>
                <span className="mt-2">Date of Birth</span>
                <span className="mt-2">Address</span>
                <span className="mt-2">E-mail</span>
                <span className="mt-2">Phone</span>
            </div>

            <div className="ml-12 flex flex-col capitalize text-gray-600 dark:text-gray-400">
                                <span className="mt-2 text-black dark:text-gray-200">
                                    {user.first_name} {user.last_name}
                                </span>
                <span className="mt-2 text-black dark:text-gray-200">
                                    {user.medicare}
                                </span>
                <span className="mt-2 text-black dark:text-gray-200">
                                    {user.dob}
                                </span>
                <span className="mt-2 text-black dark:text-gray-200">
                                    {user.address}, {user.city}, {user.province}, {user.postal_code}
                                </span>
                <span className="mt-2 text-black dark:text-gray-200">
                                    {user.email}
                                </span>
                <span className="mt-2 text-black dark:text-gray-200">
                                    {user.phone}
                                </span>
            </div>
        </div>
    );
}
