import React, {Component, Fragment} from 'react';
import Forms from "../../helpers";
import ErrorOnly from "../../helpers/errorOnly"
import {Field, reduxForm} from 'redux-form';
import AddModal from "./addModal"
import './addStudent.css'

class AddStudentValidation extends Component {
    state = {
        rows: "",
        classes: false,
        studentData: "",
        classData: "",
        submitted: false
    };

    getGrades = (values) => {
        let classArray = [];
        let gradesArray = [];
        let classKeys = [];
        let gradesKeys = [];
        let indexCount = 0;
        for (let index in values) {
            indexCount++;
        }
        const numberOfClasses = (indexCount - 5) / 2;
        for (let index = 1; index <= 6; index++) {
            if (values[`class_${index}`]) {
                classArray.push(values[`class_${index}`]);
            } else {
                classArray.push('null');
            }

            if (values[`grade_${index}`]) {
                gradesArray.push(values[`grade_${index}`]);
            } else {
                gradesArray.push('null');
            }
            classKeys.push(`class${index}`);
            gradesKeys.push(`class${index}_grade`);
        }
        const classValues = classArray.concat(gradesArray);
        const AllKeys = classKeys.concat(gradesKeys);
        const classInfo = classValues.concat(AllKeys);
        console.log("classArray: ", classInfo);
        return classInfo;
    };

    callAction = (values) => {
        this.spinner.classList.remove("hide");
        console.log("values: ", values);
        let e = document.getElementById("dropMenu");
        let year = e.options[e.selectedIndex].value;
        console.log("year: ", year);
        let student_number = values['student_number'];
        let name = values['name'];
        let age = values['age'];
        let tardy = values['tardy'];
        let absent = values['absent'];
        const studentInfo = [student_number, name, age, year, tardy, absent, "student_number", "name", "age", "year", "tardy", "absent"];
        const classInfo = this.getGrades(values);
        console.log("studentInfo: ", studentInfo);
        console.log("classInfo: ", classInfo);
        const allInfo = studentInfo.concat(classInfo);
        this.props.reducer(allInfo);
        this.spinner.classList.add("hide");
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
                    <Field key={`classInput${index}`} name={`class_${index}`} label={`Enter Class #${index}`} component={Forms}/>
                </div>
                <div key={`grade${index}`} className="col s10 offset-s1">
                    <Field key={`gradeInput${index}`} name={`grade_${index}`} label={`Enter Class #${index} Grade`} component={Forms}/>
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
            studentData: ""
        })
    }

    previousInputs = () => {
        this.setState({
            classes: false,
        })
    };

    componentDidMount() {
        console.log('Select Ref:', this.select);

        M.FormSelect.init(this.select);
    }

    clearInputs = () => {
        this.props.clearFields()
    };

    render() {
        console.log("Proppsssss:", this.props)
        const {handleSubmit} = this.props;
        const {classes, rows} = this.state;
        return (
            <Fragment>
                <div ref={e => this.spinner = e} className="fa fa-circle-o-notch fa-spin hide"></div>
                <div className="firstInputContainer row center">
                    <form onSubmit={handleSubmit(this.nextStep)}>
                        <div className={`${classes ? "hide" : ""} z-depth-4 Info col s12 center`}>
                            <h5 className="center">Student Information</h5>
                            <div className="col s10 offset-s1">
                                <Field name={"student_number"} label={"Student Number"} component={Forms}/>
                            </div>

                            <div className="col s10 offset-s1">
                                <Field name={"name"} label={"Student's Full Name"} component={Forms}/>
                            </div>

                            <div className="col s10 offset-s1">
                                <div className="input-field col s12">
                                    <select ref={e => this.select = e} id={'dropMenu'}>
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                        <option value="5th">5th</option>
                                        <option value="6th">6th</option>
                                        <option value="7th">7th</option>
                                        <option value="8th">8th</option>
                                    </select>
                                    <label>Year</label>
                                </div>
                                <Field name={"year"} component={ErrorOnly}/>
                            </div>

                            <div className="col s10 offset-s1">
                                <Field min={"1"} max={"99"} type={"number"} name={"age"} label={"Age"}
                                       component={Forms}/>
                            </div>

                            <div className="col s10 offset-s1">
                                <Field min={"0"} max={"999"} type={"number"} name={"tardy"} label={"Tardy"}
                                       component={Forms}/>
                            </div>

                            <div className="col s10 offset-s1">
                                <Field min={"0"} max={"999"} type={"number"} name={"absent"} label={"Absent"}
                                       component={Forms}/>
                            </div>

                            <div className="col s12 left">
                                <div className="col s6">
                                    <button type={"button"} onClick={this.props.reset} className={"red darken-2 btn waves-effect waves-light"}>Clear</button>
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
                    <form onSubmit={handleSubmit(this.callAction)}>
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
                                <button className={"blue pulse darken-2 btn waves-effect waves-light"}>
                                    <AddModal/>
                                </button>
                                <div className={"extra"}/>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}

function validate({student_number, name, year, age, tardy, absent, class_1, grade_1, class_2, grade_2, class_3, grade_3, class_4, grade_4, class_5, grade_5, class_6, grade_6}) {
    const error = {};

    if (!student_number) {
        error.student_number = "Please Enter A Valid Email"
    }

    if (!name) {
        error.name = "Please Enter A Valid Name, At Least 4 Characters"
    }

    if (!age) {
        error.age = "Please Enter A Valid Number 1-99"
    }

    if (year) {
        error.year = "please Enter A Valid Year"
    }

    if (!tardy) {
        error.tardy = "please Enter A Valid Number 0-999"
    }

    if (!absent) {
        error.absent = "please Enter A Valid Number 0-999"
    }

    if (!class_1) {
        error.class_1 = "Please Enter A Valid Class"
    }

    if (!grade_1) {
        error.grade_1 = "Please Enter A Valid Grade, 1-100"
    }

    if (!class_2) {
        error.class_2 = "Please Enter A Valid Class"
    }

    if (!grade_2) {
        error.grade_2 = "Please Enter A Valid Grade, 1-100"
    }

    if (!class_3) {
        error.class_3 = "Please Enter A Valid Class"
    }

    if (!grade_3) {
        error.grade_3 = "Please Enter A Valid Grade, 1-100"
    }

    if (!class_4) {
        error.class_4 = "Please Enter A Valid Class"
    }

    if (!grade_4) {
        error.grade_4 = "Please Enter A Valid Grade, 1-100"
    }

    if (!class_5) {
        error.class_5 = "Please Enter A Valid Class"
    }

    if (!grade_5) {
        error.grade_5 = "Please Enter A Valid Grade, 1-100"
    }

    if (!class_6) {
        error.class_6 = "Please Enter A Valid Class"
    }

    if (!grade_6) {
        error.grade_6 = "Please Enter A Valid Grade, 1-100"
    }
    return (
        error
    )
}


export default reduxForm({
    form: "add_student_form",
    validate,
})(AddStudentValidation);