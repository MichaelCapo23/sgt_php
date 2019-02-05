import React, {Component} from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent, to = '/SignIn', redirect = false) => {
    class Auth extends Component {

        componentDidMount() {
            this.checkAuth();
        }

        componentDidUpdate() {
            console.log('Component Did Update');
            this.checkAuth();
        }

        checkAuth() {
            let token = localStorage.getItem("token");
            if(!token) {
                this.props.history.push(to)
            }
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state) {
        return {
            auth : state.signIn_reducer.auth
        }
    }

    return connect(mapStateToProps)(Auth)

}