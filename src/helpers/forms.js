import React from 'react';

export default ({input, min = "", max = "", key = "12", type = "text", size = "s12", label, meta: {touched, error}}) => (
    <div key={key} className={`input-field col ${size}`}>
        <input min={min} max={max} key={key} autoComplete={"off"} {...input} id={input.name} type={type} />
        <label htmlFor={input.name}>{label}</label>
        <p className="red-text text-darken-2">{touched && error}</p>
    </div>
)

