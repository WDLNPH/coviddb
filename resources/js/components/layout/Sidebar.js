// https://tailwindcomponents.com/component/dashboard-layout-with-dark-light-mode
// https://tailwindcomponents.com/component/table-ui-with-tailwindcss-and-alpinejs
import {NavLink} from "react-router-dom";

function MenuButton({name, to}) {
    return (
        <NavLink
            to={to}
            activeClassName="text-gray-700"
            role="menuitem"
            className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
        >
            {name}
        </NavLink>
    )
}

function MenuDropdown({name, icon, children}) {
    return (
        <div>
            <a
               className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-blue-100 dark:hover:bg-blue-600"
               role="button"
               aria-haspopup="true">
                <span aria-hidden="true">
                    {icon}
                </span>
                <span className="ml-2 text-sm"> {name} </span>
                <span className="ml-auto" aria-hidden="true">
                            <svg
                                className="w-4 h-4 transition-transform transform"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </span>
            </a>
            <div role="menu" className="mt-2 space-y-2 px-7" aria-label="Dashboards">
                {children}
            </div>
        </div>
    )
}
export default function () {
    return (
        <aside className="flex-shrink-0 hidden w-64 bg-white border-r dark:border-blue-800 dark:bg-darker md:block">
            <div className="flex flex-col h-full">
                <nav aria-label="Main" className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
                    <MenuButton name="Home" to={'/'}/>
                    <MenuDropdown
                        name="Admin"
                        icon={(
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        )}>
                        <MenuButton name="Patients" to={'/patients'}/>
                        <MenuButton name="Workers" to={'/workers'}/>
                        <MenuButton name="Facilities" to={'/facilities'}/>
                        <MenuButton name="Regions" to={'/regions'}/>
                        <MenuButton name="GroupZones" to={'/groupzones'}/>
                        <MenuButton name="Recommendations" to={'/recommendations'}/>
                        <MenuButton name="Symptoms" to={'/symptoms'}/>
                        <MenuButton name="Messages" to={'/Messages'}/>
                    </MenuDropdown>
                    <MenuDropdown
                        name="User"
                        icon={(
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        )}>
                        <MenuButton name="Diagnostics" to={'/diagnostics'}/>
                        <MenuButton name="Create Follow-Up Form" to={'/follow-up-form'}/>
                    </MenuDropdown>
                    {/*
                    <MenuDropdown
                        name="Warm-Up Project"
                        icon={(
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        )}>
                         <MenuButton name="Query Result" to={'/query-result'}/>
                      </MenuDropdown>*/
                    }
                </nav>
            </div>
        </aside>
    )
}
