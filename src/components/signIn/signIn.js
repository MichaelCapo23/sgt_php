import React, {Component} from 'react';
import {Field, Form} from 'redux-form';
import {connect} from "react-redux"
import SignInValidation from './SignInValidation'
import {signInAction} from "../../actions/signIn_action";

class SignIn extends Component {
    state = {
        error: null,
        auth: ""
    }

    componentDidMount = () => {
        this.setState({
            error : this.props.error,
            auth: this.props.auth
        })
    }

    handleSubmit = async (values) => {
        await this.props.signInAction(values);
        // if(this.state)
    };

    componentDidUpdate = () => {
        let {auth, error} = this.state;
        if(auth !== this.props.auth || error !== this.props.error) {
            this.setState({
                error: this.props.error,
                auth: this.props.auth
            })
        }
        if(this.state.auth) { //might have to change this if it doesnt work consistently
            this.props.history.push("/");
        }
    }

    render() {
        console.log(this.state.error);
        console.log(this.state.auth);
        return(
            <div>
                <div>{this.state.error ? this.state.error : ""}</div>
                <h1 className="center">Sign In</h1>
                <SignInValidation submitFunction={this.handleSubmit}/>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        auth: store.signIn_reducer.auth,
        error: store.signIn_reducer.error
    }
}

export default connect(mapStateToProps, {
    signInAction
})(SignIn)