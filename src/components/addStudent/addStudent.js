import React, {Component} from 'react';
import {connect} from 'react-redux'
import AddStudentValidation from "./addStudentValidation"
import {addStudent_action} from "../../actions/addStudent_action"
import './addStudent.css'

class AddStudent extends Component {

    handleSubmit = (values) => {
        this.props.addStudent_action(values);
    }

    render() {
        return(
            <div>
                <h1 className="center">Add Students!</h1>
                <AddStudentValidation submitFunction={this.handleSubmit}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{

    }
}

export default connect(mapStateToProps, {
    addStudent_action
})(AddStudent);