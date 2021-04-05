import React, {useEffect, useState} from 'react';
import {updateFacility} from "../../../api";
import {useParams} from "react-router";

const ALERT_LEVEL_ONE = 1;
const ALERT_LEVEL_TWO = 2;
const ALERT_LEVEL_THREE = 3;
const ALERT_LEVEL_FOUR = 4;
const ALERT_LEVEL_STRINGS = {
    [ALERT_LEVEL_ONE]: 'Level 1: Vigilance',
    [ALERT_LEVEL_TWO]: 'Level 2: Early Warning',
    [ALERT_LEVEL_THREE]: 'Level 3: Moderate Alert',
    [ALERT_LEVEL_FOUR]: 'Level 4: Maximum Alert'
}
export default function () {
    const [region, setRegion] = useState(null);
    const [alertLevel, setAlertLevel] = useState(ALERT_LEVEL_ONE);
    const [loading, setLoading] = useState(false);
    const {regionId} = useParams();
    useEffect(() => {
        // fetch the patient object from the db
    }, [])

    function increment() {
        if ((alertLevel + 1) <= ALERT_LEVEL_FOUR) {
            setAlertLevel(alertLevel + 1);
        }
    }
    function decrement() {
        if ((alertLevel - 1) >= ALERT_LEVEL_ONE) {
            setAlertLevel(alertLevel - 1);
        }
    }
    return loading ? <>please wait</> : <>
        <div className="custom-number-input h-10 w-96">
            <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">Counter
                Input
            </label>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button
                    onClick={decrement}
                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                    onChange={() => {}}
                   type="text"
                   className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                   name="custom-input-number" value={ALERT_LEVEL_STRINGS[alertLevel]}/>
                <button
                    onClick={increment}
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    </>
}
