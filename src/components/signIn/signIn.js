import React, {Component} from 'react';
import {Field, Form} from 'redux-form';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
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
        if(this.state.auth) {
            this.props.history.push("/");
        }
    };

    componentDidUpdate = () => {
        let {auth, error} = this.state;
        let token = localStorage.getItem("token");
        if(auth !== this.props.auth || error !== this.props.error) {
            this.setState({
                error: this.props.error,
                auth: this.props.auth
            })
        }
        if(token) {
            this.props.history.push("/");
        }
    };

    render() {
        console.log(this.state.error);
        console.log(this.state.auth);
        console.log(this.props);
        return(
            <div>
                <h1 className="center">Sign In</h1>
                <div className={"center red-text"}>{this.state.error ? this.state.error : ""}</div>
                <SignInValidation submitFunction={this.handleSubmit}/>
                <p className="col center-align l12 m12 s12 grey-text signin_footer">Dont have an account? <Link className='yellow-text text-darken-2' to={"/SignUp"}>Sign up now! </Link> </p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.signIn_reducer.auth,
        error: state.signIn_reducer.error,
        signOutError: state.signIn_reducer.signOutError
    }
}

export default connect(mapStateToProps, {
    signInAction
})(SignIn)