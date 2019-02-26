import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Forms from '../../helpers/forms'

const SignUpValidation = props => {
    const {handleSubmit, submitFunction} = props;
    return (
        <form onSubmit={handleSubmit(submitFunction)}>
            <div className="row">
                <Field name={"username"} label={"Username"} component={Forms}/>
            </div>

            <div className={"row"}>
                <Field name={"Email"} label={"Email"} component={Forms}/>
            </div>

            <div className="row">
                <Field type={"password"} name={"Password"} label={"Password"} component={Forms}/>
            </div>

            <div className="row">
                <Field type={"password"} name={"Confirm"} label={"re-enter Password"} component={Forms}/>
            </div>

            <div className="row center">
                <div className="col s6">
                    <button type={"button"} onClick={props.reset} className={"red darken-2 btn waves-effect waves-light"}>Clear</button>
                </div>

                <div className="col s6">
                    <button className={"blue darken-2 btn waves-effect waves-light"}>Sign Up</button>
                </div>
            </div>
        </form>
    )
};

function validate({username, Email, Password, Confirm}){
    let errors = {};
    if(!username) {
        errors.username = "Invalid Username"
    }

    if(!Email) {
        errors.Email = "Invalid Email Address"
    }

    if(!Password) {
        errors.Password = "Must Have At Least Eight Characters, One Capital Letter, And A Number"
    }

    if(!Confirm) {
        errors.Confirm = "Must Match The Password Above"
    }
    return errors;
}

export default reduxForm({
    form: "sign-up-form",
    validate,
})(SignUpValidation)