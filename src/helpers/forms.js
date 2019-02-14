import React from 'react';

export default ({classdiv= "", input, active="active", placeholder="" ,min = "", max = "", key = "12", type = "text", size = "s12", label, meta: {touched, error}}) => (
    <div  key={key} className={`${classdiv} input-field col ${size}`}>
        <input placeholder={placeholder} min={min} max={max} key={key} autoComplete={"off"} {...input} id={input.name} type={type} />
        <label className={active} htmlFor={input.name}>{label}</label>
        <p className="errorMessageText red-text text-darken-2">{touched && error}</p>
    </div>
)

