import React from "react";

const forminput = ({
                       name,
                       type,
                       placeholder,
                       onChange,
                       className,
                       value,
                       error,
                       onBlur,
                   }) => {
    return (
        <div>
            <input
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                className={className}
                type={type}
                onBlur={onBlur}
                onChange={onChange}
            />
            {error && <p>{error}</p>}
        </div>
    );
};

export default forminput;
