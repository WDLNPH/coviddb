import {useFormikContext} from "formik";
import {useEffect, useState} from "react";
import {autocompleteRegions} from "../../../api";

export function AutocompleteRegionValues({onUpdate}) {
    // Grab values and submitForm from context
    const {values} = useFormikContext();
    const [search, updateSearch] = useState("");

    useEffect(() => {
        async function loadRegionValues(postalCode) {
            try {
                const {data} = await autocompleteRegions(postalCode);
                onUpdate(data);
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
}
