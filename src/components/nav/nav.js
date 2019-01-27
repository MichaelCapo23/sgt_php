import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'


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
            {
                text: "Profile",
                to: "/profile"
            },
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
    }

    getLinksInMenu = () => {
        let auth = false;
        const {common, Auth, noAuth} = this.state;
        // const {auth} = this.props;     this will come from the redux state set by redux-form and made into a prop through mapStateToProps
        let links = [...common];
        if(auth) {
            links = [...common, ...Auth].map(this.buildLinkForNav);
            links.push(
                <li key={"sign-out"} className={"sign-out"}>
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

export default Nav;
