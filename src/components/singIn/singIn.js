import React, {Component} from 'react';
import {Field, Form} from 'redux-form';
import {connect} from "react-redux"
import SignInValidation from '../../components/singIn/SignInValidation'

class SignIn extends Component {

    handleSubmit = (values) => {
        console.log("values: ", values);
        //call the redux action creator for signing in here
    }


    render() {
        return(
            <div>
                <h1 className="center">Sign In</h1>
                <SignInValidation submitFunction={this.handleSubmit}/>
            </div>
        )
    }
}

function mapStateToProps() {
    return {

    }
}

export default connect(mapStateToProps, {})(SignIn)