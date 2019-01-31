import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
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
        Auth : [
            {
                text: "Add Student",
                to: "/addStudent"
            },
            // {
            //     text: "Profile",
            //     to: "/profile"
            // },
            {
                text: "Edit Records",
                to: "/EditRecords"
            }
        ],
        noAuth : [
            {
                text: "Sign In",
                to : "/signIn"
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

    buildLinkForNav = (link) => {
        return (
            <li key={link.to}>
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
        let links = [...common];
        if(auth) {
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
                    <ul ref={(element) => {this.navRef = element }} id={"side-nav"} className={"sidenav"}>
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
    }
}

export default connect(mapStateToProps, {
    signOutAction,
})(Nav);
