import React from 'react';

export default ({input, active="active", placeholder="" ,min = "", max = "", key = "12", type = "text", size = "s12", label, meta: {touched, error}}) => (
    <div key={key} className={`input-field col ${size}`}>
        <input placeholder={placeholder} min={min} max={max} key={key} autoComplete={"off"} {...input} id={input.name} type={type} />
        <label className={active} htmlFor={input.name}>{label}</label>
        <p className="red-text text-darken-2">{touched && error}</p>
    </div>
)

