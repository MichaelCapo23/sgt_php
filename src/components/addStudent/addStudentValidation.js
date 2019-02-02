import React, {Component, Fragment} from 'react';
import Forms from "../../helpers";
import ErrorOnly from "../../helpers/errorOnly"
import {Field, reduxForm} from 'redux-form';
import './addStudent.css'

class AddStudentValidation extends Component {
    state = {
        rows: "",
        classes: false,
        studentData: "",
        classData: "",
        submitted: false
    };

    ClassRows = (event) => {
        if (event) {
            let number = event.target.value;
            let rows = this.addClassRows(1, number, []);
            this.setState({
                rows: rows || 0
            })
        }
    }

    addClassRows = (index, timesToRun, arrayOfDivs) => {
        let newClass = (
            <Fragment>
                <div key={`class${index}`} className="col s10 offset-s1">
                    <Field key={`classInput${index}`} name={`class_${index}`} label={"enter class"} component={Forms}/>
                </div>
                <div key={`grade${index}`} className="col s10 offset-s1">
                    <Field key={`gradeInput${index}`} name={`grade_${index}`} label={"enter grade"} component={Forms}/>
                </div>
            </Fragment>
        );
        arrayOfDivs.push(newClass);
        index++;
        const times = parseFloat(timesToRun);
        if (index <= times) {
            this.addClassRows(index, times, arrayOfDivs)
        }
        return arrayOfDivs
    };

    nextStep = () => {
        this.setState({
            classes: true,
            studentData: "something"
        })
    }

    previousInputs = () => {
        this.setState({
            classes: false,
            classData: "something"
        })
    }

    render() {
        const {handleSubmit, submitFunction} = this.props;
        const {classes, rows, studentData, classData} = this.state;
        console.log(this.props);
        return (
            <Fragment>
                <div className="firstInputContainer row center">
                    <form onSubmit={this.nextStep}>
                        <div className={`${classes ? "hide" : ""} z-depth-4 Info col s12 center`}>
                            <h5 className="center">Student Information</h5>
                            <div className="col s10 offset-s1">
                                <Field name={"student_id"} label={"Student ID"} component={Forms}/>
                            </div>

                            <div className="col s10 offset-s1">
                                <Field name={"name"} label={"Student's Full Name"} component={Forms}/>
                            </div>

                            <div onClick={document.addEventListener('DOMContentLoaded', function () {
                                var elems = document.querySelectorAll('select');
                                var instances = M.FormSelect.init(elems);
                            })} className="col s10 offset-s1">
                                <div className="input-field col s12">
                                    <select>
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                        <option value="5th">5th</option>
                                        <option value="6th">6th</option>
                                        <option value="7th">7th</option>
                                        <option value="8th">8th</option>
                                    </select>
                                    <label>year</label>
                                </div>
                                <Field name={"year"} component={ErrorOnly}/>
                            </div>

                            <div className="col s10 offset-s1">
                                <Field min={"1"} max={"99"} type={"number"} name={"Age"} label={"Age"}
                                       component={Forms}/>
                            </div>

                            <div className="col s12 left">
                                <div className="col s6">
                                    <button className={"red darken-2 btn waves-effect waves-light"}>Clear</button>
                                </div>

                                <div className="col s6 right">
                                    <button className={"blue pulse darken-2 btn waves-effect waves-light"}>Next</button>
                                    <div className={"extra"}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>


                <div className={`${classes ? "" : "hide"} z-depth-4 classes row center`}>
                    {/*<form onSubmit={handleSubmit(submitFunction)}>*/}
                    <h5 className="center">Enter Classes</h5>
                    <div className="input-field col s10 offset-s1">
                        <input onChange={event => this.ClassRows(event)} name={"classes"} id={"classes"}
                               className={"addInput col s10 offset-s1"} autoComplete={"off"}
                               type="number" min="1" max="6"/>
                        <label className={"col offset-s1"} htmlFor={"classes"}>{"Enter number of classes"}</label>
                    </div>
                    <div>
                        {classes ? rows : ""}
                    </div>


                    <div className="col s12 left">
                        <div className="col s6">
                            <button type={"button"} onClick={this.previousInputs}
                                    className={"red darken-2 btn waves-effect waves-light"}>previous
                            </button>
                        </div>

                        <div className="col s6 right">
                            <button type={"button"} onClick={submitFunction(studentData, classData)}
                                    className={"blue pulse darken-2 btn waves-effect waves-light"}>Add Student
                            </button>
                            <div className={"extra"}/>
                        </div>
                    </div>
                    {/*</form>*/}
                </div>
            </Fragment>
        )
    }
}


function validate({student_id, name, year, Age, class_1, grade_1, class_2, grade_2, class_3, grade_3, class_4, grade_4, class_5, grade_5, class_6, grade_6}) {
    const error = {};

    if (!student_id) {
        error.student_id = "Please enter a valid email"
    }

    if (!name) {
        error.name = "Please enter a valid name, at least 4 characters"
    }

    // if (!year) {
    //     error.year = "Please enter a valid year 1-8"
    // }

    if (!Age) {
        error.Age = "Please enter a valid 1-99"
    }

    if (!class_1) {
        error.class_1 = "Please enter a valid class"
    }

    if (!grade_1) {
        error.grade_1 = "Please enter a valid grade, 1-100"
    }

    if (!class_2) {
        error.class_2 = "Please enter a valid class"
    }

    if (!grade_2) {
        error.grade_2 = "Please enter a valid grade, 1-100"
    }

    if (!class_3) {
        error.class_3 = "Please enter a valid class"
    }

    if (!grade_3) {
        error.grade_3 = "Please enter a valid grade, 1-100"
    }

    if (!class_4) {
        error.class_4 = "Please enter a valid class"
    }

    if (!grade_4) {
        error.grade_4 = "Please enter a valid grade, 1-100"
    }

    if (!class_5) {
        error.class_5 = "Please enter a valid class"
    }

    if (!grade_5) {
        error.grade_5 = "Please enter a valid grade, 1-100"
    }

    if (!class_6) {
        error.class_6 = "Please enter a valid class"
    }

    if (!grade_6) {
        error.grade_6 = "Please enter a valid grade, 1-100"
    }

    return error;
}

export default reduxForm({
    form: "add_student_form",
    validate,
})(AddStudentValidation);