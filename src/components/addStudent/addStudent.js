import React, {Component} from 'react';
import {Field, Form} from 'redux-form'
import Forms from '../../helpers/forms'
import {Field, reduxForm} from 'redux-form';

class AddStudent extends  Component {
    render() {
        return(
            <div>
                <h1 className="center">Add Student</h1>
                <div className="row">
                    <Field name={"student_name"} label={"student Name"}/>
                </div>

                <div className="row">
                    <Field name={"grade"} label={"grade"}/>
                </div>

                <div className="row">
                    <Field name={"student_name"} label={"student Name"}/>
                </div>

                <div className="row">
                    <Field name={"student_name"} label={"student Name"}/>
                </div>
            </div>
        )
    }
}

export default AddStudent