import React from 'react';

export default ({input, type = "text", size = "s12", label, meta: {touched, error}}) => (
    <div className={`input-field col ${size}`}>
        <input autoComplete={"off"} {...input} id={input.name} type={type} />
        <label htmlFor={input.name}>{label}</label>
        <p className="red-text text-darken-2">{touched && error}</p>
    </div>
)

