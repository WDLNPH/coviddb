import {Field, useFormikContext} from "formik";
import React, {useState} from "react";

export function Dropdown ({children, disabled, name, id}) {
    return (
        <div className="relative">
            <Field
                disabled={disabled}
                as="select"
                name={name}
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id={id}>
                {children}
            </Field>
            <div className="pointer-events-none absolute right-1 top-3 pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </div>
        </div>
    );
}

export function SmartField(props) {
    const {touched, errors} = useFormikContext();
    return (
        <>
            <Field {...props} className={`${props.className} ${errors[props.name] && touched[props.name] ? 'bg-red-50 border-red-400' : ''}`}/>
            {errors[props.name] && touched[props.name] ? (
                <div className="text-red-700 mt-1 text-xs font-bold">{errors[props.name]}</div>
            ) : null}
        </>
    );
}

export function DeleteButton({onClick}) {
    const [isDeleting, setIsDeleting] = useState(false);

    return (
        <>
            {isDeleting ? (
                <>
                    <span>Are you sure?</span>
                    <button onClick={onClick} className="mp-button bg-red-600 text-white border-none">
                        Yes
                    </button>
                    <button onClick={() => setIsDeleting(false)}>
                        No
                    </button>
                </>
            ) : (
                <button onClick={() => setIsDeleting(true)} className="mp-button bg-red-600 text-white border-none">
                    Delete
                </button>
            )}
        </>
    );
}


export const withCrud = BaseComponent => ({ removePromise, redirectUrl, upsertPromise, ...props}) => {
    async function handleRemove() {
        try {
            const {data} = await removePromise();
            alert("done boi2")
            history.push(redirectUrl);
        } catch (exception) {
            // skip
            alert(exception)
        }
    }

    async function handleSubmit(values) {
        try {
            const {data} = await upsertPromise(values);
            alert("done boi1")
            history.push(redirectUrl);
        } catch (exception) {
            // skip
            alert(exception)
        }
    }

    return <BaseComponent handleRemove={handleRemove} handleSubmit={handleSubmit} {...props} />
}
