import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux"
import updateRecord_reducer from "../../reducers/updateRecord_reducer";

class ButtonModal extends Component {
    state = {
        isOpen: false
    };

    open = () => this.setState({isOpen: true});

    close = () => this.setState({isOpen: false});

    pushEdit = () => {
        this.props.history.push("/EditRecords")
    };

    pushHome = () => {
        this.props.history.push("/")
    };

    render() {
        if (this.state.isOpen && this.props.updateConfirmation.ClassSuccess) {
            return (
                <div className="basic-modal" onClick={this.close}>
                    <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                        <div onClick={this.close} className="row basic-modal-close">X</div>
                        <h4>Student Record Updated!</h4>
                        <div className="col s12 left">
                            <div className="col s6">
                                <button onClick={this.pushHome}
                                        className={"green darken-2 btn waves-effect waves-light"}>Home page
                                </button>
                            </div>

                            <div className="col s6 right">
                                <button onClick={this.pushEdit}
                                        className={"blue darken-2 btn waves-effect waves-light"}>Edit page
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
        updateConfirmation: state.updateRecord_reducer.message
    }
}

export default connect(mapStateToProps, {})(withRouter(ButtonModal));