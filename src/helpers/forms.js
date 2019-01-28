import React from 'react';

export default ({name, inputs, type = "text", size = "s12", label, meta: {touched, error}}) => (
    <div>
        <input autoComplete={"off"} {...inputs} id={name} type={type} />
        <label htmlFor={name}>{label}</label>
        <p className="red-text text-darken-2">{touched && error}</p>
    </div>
)