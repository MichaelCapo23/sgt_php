import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Forms from '../../helpers/forms'

let SignInValidation = props => {
    const {handleSubmit, submitFunction, clearInputs} = props;
    return (
        <form onSubmit={handleSubmit(submitFunction)}>
            <div className={"row"}>
                <Field name={"email"} label={"email"} component={Forms}/>
            </div>

            <div className="row">
                <Field name={"password"} label={"password"} type={"password"} component={Forms}/>
            </div>

            <div className="row center">
                <div className="col s6">
                    <button className={"red darken-2 btn waves-effect waves-light"}>Clear</button>
                </div>

                <div className="col s6">
                    <button className={"blue darken-2 btn waves-effect waves-light"}>Sign In</button>
                </div>
            </div>
        </form>
    )
};

function validate({email, password}) {
    const error = {};
    if (!email) {
        error.email = "Please enter a valid email"
    }

    if (!password) {
        error.password = "Please enter a valid password"
    }
    return error;
}

export default reduxForm({
    form: 'sing-in-form',
    validate: validate,
})(SignInValidation)
