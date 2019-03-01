import React, {Component} from 'react';
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import addStudent_reducer from "../../reducers/addStudent_reducer";

class ButtonModal extends Component {
    state = {
        isOpen: false
    };

    open = () => this.setState({isOpen: true});

    close = () => this.setState({isOpen: false});

    pushAdd = () => {
        this.props.history.push("/addStudent")
    };

    pushHome = () => {
        this.props.history.push("/")
    };

    render() {
        if (this.state.isOpen) {
            return (
                <div className="basic-modal" onClick={this.close}>
                    <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                        <div onClick={this.close} className="row basic-modal-close">X</div>
                        <h4>{this.props.confirmation ? this.props.confirmation : "Student Added!"}</h4>
                        <div className="col s12 left">
                            <div className="col s6">
                                <button onClick={this.pushHome}
                                        className={"green darken-2 btn waves-effect waves-light"}>Home Page
                                </button>
                            </div>

                            <div className="col s6 right">
                                <button onClick={this.pushAdd}
                                        className={"blue darken-2 btn waves-effect waves-light"}>Add page
                                </button>
                                <div className={"extra"}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div onClick={this.open}>Commit Changes</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        confirmation: state.addStudent_reducer.error,
    }
}

export default connect(mapStateToProps, {})(withRouter(ButtonModal));