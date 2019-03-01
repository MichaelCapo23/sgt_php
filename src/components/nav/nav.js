import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom"
import {Link} from 'react-router-dom'
import {signOutAction} from "../../actions/signOut_action";


class Nav extends Component {
    state = {
        common: [
            {
                text: "Grade Table",
                to: "/"
            },
        ],
        Auth: [
            {
                text: "Add Student",
                to: "/addStudent"
            },
            {
                text: "Edit Records",
                to: "/EditRecords"
            }
        ],
        noAuth: [
            {
                text: "Sign In",
                to: "/signIn"
            },
            {
                text: "Sign Up",
                to: "/signUp"
            }
        ],
        links: '',
    };

    componentDidMount() {
        M.Sidenav.init(this.navRef);
    }

    closeNav = () => {
        M.Sidenav.init(this.navRef).close();
    }

    buildLinkForNav = (link) => {
        return (
            <li onClick={this.closeNav} key={link.to}>
                <Link to={link.to}>{link.text}</Link>
            </li>
        )
    };

    handleSignOut = () => {
        this.props.signOutAction();
    };

    getLinksInMenu = () => {
        console.log("auth: ", this.props.auth);
        const {common, Auth, noAuth} = this.state;
        const {auth} = this.props;
        let token = localStorage.getItem("token");
        let links = [...common];
        if (auth || token) {
            links = [...common, ...Auth].map(this.buildLinkForNav);
            links.push(
                <li key={"sign-out"} className={"sign-out center"}>
                    <button onClick={this.handleSignOut} className={"btn blue"}>Sign Out</button>
                </li>
            )
        } else {
            links = [...common, ...noAuth].map(this.buildLinkForNav)
        }
        return links
    };

    render() {
        const links = this.getLinksInMenu();
        return (
            <Fragment>
                <nav>
                    <a href={"#"} data-target="side-nav" className={"sidenav-trigger show-on-large"}>
                        <i className={'material-icons'}>menu</i>
                    </a>
                    <ul ref={(element) => {
                        this.navRef = element
                    }} id={"side-nav"} className={"sidenav"}>
                        {links}
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.signIn_reducer.auth,
        token: localStorage.getItem("token")
    }
}

export default connect(mapStateToProps, {
    signOutAction,
})(withRouter(Nav));
