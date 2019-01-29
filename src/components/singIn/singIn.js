import React, {Component} from 'react';
import {Field, Form} from 'redux-form';
import {connect} from "react-redux"
import SignInValidation from './SignInValidation'
import {signIn} from "../../actions/singIn_reducer";

class SignIn extends Component {

    componentDidMount = () => {
        localStorage.setItem("token", this.props.token)
    }

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

function mapStateToProps(store) {
    return {
        token: store.signIn.token
    }
}

export default connect(mapStateToProps, {})(SignIn)