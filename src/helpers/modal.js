import React, { Component } from 'react';

class ButtonModal extends Component {
    state = {
        isOpen: false
    };

    open = () => this.setState({isOpen: true});

    close = () => this.setState({isOpen: false});

    render(){

        if(this.state.isOpen){
            return (
                <div className="basic-modal" onClick={this.close}>
                    <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                        <div onClick={this.close} className="basic-modal-close">X</div>
                        <h1>Student Record Updated!</h1>
                    </div>
                </div>
            )
        }

        return (
            <div onClick={this.open}>Commit Changes</div>
        );
    }
}

export default ButtonModal;