import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Forms from '../../helpers/forms'

let SignUpValidation = props => {
    const {handleSubmit, submitFunction, clearInputs} = props;
    return (
        <form onSubmit={handleSubmit(submitFunction)}>
            <div className="row">
                <Field name={"username"} label={"username"} component={Forms}/>
            </div>

            <div className={"row"}>
                <Field name={"Email"} label={"Email"} component={Forms}/>
            </div>

            <div className="row">
                <Field name={"Password"} label={"Password"} component={Forms}/>
            </div>

            <div className="row">
                <Field name={"Confirm"} label={"re-enter Password"} component={Forms}/>
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
}

export default reduxForm({
    form: "sign-uo-form"
})(SignUpValidation)