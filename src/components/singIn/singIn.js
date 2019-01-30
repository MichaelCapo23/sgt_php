import React, {Component} from 'react';
import {Field, Form} from 'redux-form';
import {connect} from "react-redux"
import SignInValidation from './SignInValidation'
import {signInAction} from "../../actions/singIn_action";

class SignIn extends Component {

    componentDidMount = () => {
        // localStorage.setItem("token", this.props.token)
    }

    handleSubmit = async (values) => {
        console.log("values: ", values);
        await this.props.signInAction();
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
        // token: store.signIn.token
    }
}

export default connect(mapStateToProps, {
    signInAction
})(SignIn)