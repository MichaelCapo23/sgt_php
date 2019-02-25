import React, {Component} from 'react';
import {Field, Form} from 'redux-form';
import {Link} from "react-router-dom"
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
                <p className="grey-text signup_footer col s12 m12 l12 center-align">Already have an account? <Link className='yellow-text text-darken-2' to={"/SignIn"}> Sign In </Link></p>
            </div>
        )
    }
}

export default SignUp