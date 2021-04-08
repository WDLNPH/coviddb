
export default function () {
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

                <div className="-mx-2 py-8 flex flex-row">
                    <div className="mx-1 flex-1 flex px-4 py-4 justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">
                        <PersonInfoCard/>
                    </div>
                    <div className="mx-1 flex-1 flex px-4 py-4 justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">
                        {user.role === 'worker' ? (
                            <WorkerLastDiagnostics/>
                        ) : user.role === 'patient' ? (
                            <PatientLastDiagnostics/>
                        ) : user.role === 'admin' ? (
                            <LastRegionUpdates/>
                        )}
                        <div className="flex">
                            <div
                                className="mr-16 flex flex-col capitalize text-gray-600
                                dark:text-gray-400">
                                <span>project</span>
                                <span className="mt-2 text-black dark:text-gray-200">
                                    Aero treck
                                </span>
                                <span className="text-black dark:text-gray-200">
                                    Grass Max
                                </span>
                                <span className="text-black dark:text-gray-200">Mental</span>
                            </div>

                            <div
                                className="mr-16 flex flex-col capitalize text-gray-600
                                dark:text-gray-400">
                                <span>role</span>
                                <span className="mt-2 text-black dark:text-gray-200">
                                    designer
                                </span>
                                <span className="text-black dark:text-gray-200">
                                    designer
                                </span>
                                <span className="text-black dark:text-gray-200">
                                    illustrator
                                </span>
                            </div>

                            <div
                                className="mr-16 flex flex-col capitalize text-gray-600
                                dark:text-gray-400">
                                <span>status</span>
                                <span className="mt-2 text-green-400 dark:text-green-200">
                                    on check
                                </span>
                                <span className="mt-2 text-yellow-600 dark:text-yellow-400">
                                    in work
                                </span>
                                <span className="mt-2 text-black dark:text-gray-200">
                                    none
                                </span>
                            </div>

                            <div
                                className="mr-8 flex flex-col capitalize text-gray-600
                                dark:text-gray-400">
                                <span>final date</span>
                                <span className="mt-2 text-green-400 dark:text-green-200">
                                    20.02.2020 11:00
                                </span>
                                <span className="mt-2 text-yellow-600 dark:text-yellow-400">
                                    20.02.2020 13:00
                                </span>
                                <span className="mt-2 text-green-400 dark:text-green-200">
                                    20.02.2020 11:00
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-2 flex px-4 py-4 justify-between bg-white
                    dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer ">

                    <div className="flex">
                        <div
                            className="ml-4 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>name</span>
                            <span className="mt-2 text-black dark:text-gray-200">
                                carmen beltran
                            </span>
                        </div>

                        <div
                            className="ml-12 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>login</span>
                            <span className="mt-2 text-black dark:text-gray-200">
                                carmen.bel
                            </span>

                        </div>

                    </div>

                    <div className="flex">

                        <div
                            className="mr-16 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>project</span>
                            <span className="mt-2 text-black dark:text-gray-200">
                                Aero treck
                            </span>
                            <span className="text-red-600 dark:text-red-400">
                                search
                            </span>
                            <span>2 more...</span>
                        </div>

                        <div
                            className="mr-16 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>role</span>
                            <span className="mt-2 text-black dark:text-gray-200">
                                Designer
                            </span>
                            <span className="text-red-600 dark:text-red-400">
                                Designer
                            </span>
                        </div>

                        <div
                            className="mr-16 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>status</span>
                            <span className="mt-2 text-black dark:text-gray-200">
                                None
                            </span>
                            <span className="text-red-600 dark:text-red-400">
                                in work
                            </span>
                        </div>

                        <div
                            className="mr-8 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>final date</span>
                            <span className="mt-2 text-green-400 dark:text-green-200">
                                20.02.2020
                            </span>
                            <span className="text-red-600 dark:text-red-400">
                                07.02.2020 11:00
                            </span>
                        </div>

                    </div>

                </div>

                <div
                    className="mt-8 mb-4 flex px-4 py-4 justify-between bg-white
                    dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">

                    <div className="flex justify-between">

                        <img
                            className="h-12 w-12 rounded-full object-cover"
                            src="https://media.contentapi.ea.com/content/dam/gin/images/2017/01/crysis-3-keyart.jpg.adapt.crop1x1.767p.jpg"
                            alt=""/>

                        <div
                            className="ml-4 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>name</span>
                            <span className="mt-2 text-black dark:text-gray-200">
                                crysis
                            </span>
                        </div>

                        <div
                            className="ml-12 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>login</span>
                            <span className="mt-2 text-black dark:text-gray-200">
                                crysis
                            </span>

                        </div>

                    </div>

                    <div className="flex">

                        <div
                            className="mr-16 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>project</span>
                            <span className="mt-2 text-black dark:text-gray-200">
                                Killing
                            </span>
                        </div>

                        <div
                            className="mr-16 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>role</span>
                            <span className="mt-2 text-black dark:text-gray-200">
                                hunter
                            </span>
                        </div>

                        <div
                            className="mr-16 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>status</span>
                            <span className="mt-2 text-yellow-600 dark:text-yellow-400">
                                in work
                            </span>
                        </div>

                        <div
                            className="mr-8 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>final date</span>
                            <span className="mt-2 text-green-400 dark:text-green-200">
                                20.02.2020 11:00
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
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
