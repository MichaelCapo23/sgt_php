import React, {Component} from 'react';
import {connect} from 'react-redux'
import AddStudentValidation from "./addStudentValidation"
import {addStudent_action} from "../../actions/addStudent_action"
import './addStudent.css'

class AddStudent extends Component {


    render() {
        return(
            <div>
                <h1 className="center">Add Students!</h1>
                <AddStudentValidation reducer={this.props.addStudent_action}/>
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