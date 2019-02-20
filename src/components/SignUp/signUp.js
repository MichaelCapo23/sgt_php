import React, {Component} from 'react';
import {Field, Form} from 'redux-form';
import SignUpValidation from './SignUpValidation'

class SignUp extends Component {
    componentDidMount = () => {
        // localStorage.setItem("token", this.props.token)
    };

    handleSubmit = (values) => {
        console.log("values: ", values);
        //call the redux action creator for signing in here
    };

    render() {
        return(
            <div>
                <h1 className="center">Sign Up</h1>
                <SignUpValidation  submitFunction={this.handleSubmit}/>
            </div>
        )
    }
}

export default SignUp