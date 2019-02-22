import React, {Component} from "react";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux"
import {UpdateRecord_action} from '../../actions/updateRecord_action';
import Forms from "../../helpers";
import Modal from './modal'
import updateRecord_reducer from "../../reducers/updateRecord_reducer";
// import updateRecord_reducer from "../../reducers/updateRecord_reducer"


class EditPage extends Component {
    state = {
        data: "",
    }

    getGPA = (classData, index) => {
        console.log(classData);
        const classArray = [classData[index].class1_grade, classData[index].class2_grade, classData[index].class3_grade, classData[index].class4_grade, classData[index].class5_grade, classData[index].class6_grade]
        let currentClassGrades = classArray.filter((index) => index != null || index != undefined);
        let totalScore = 0;
        for (let index = 0; index < currentClassGrades.length; index++) {
            if (currentClassGrades[index] > 89.9) {
                totalScore += 4
            } else if (currentClassGrades[index] > 79.9) {
                totalScore += 3;
            } else if (currentClassGrades[index] > 69.9) {
                totalScore += 2;
            } else if (currentClassGrades[index] > 59.9) {
                totalScore += 1;
            } else {
                totalScore += 0;
            }
        }
        let gpa = totalScore / currentClassGrades.length;
        return gpa.toFixed(2);
    };

    getGrades = (values) => {
        let classArray = [];
        let gradesArray = [];
        let classKeys = [];
        let gradesKeys = [];
        let indexCount = 0;
        for (let index = 1; index <= 6; index++) {
            if (values[`Class${index}`]) {
                classArray.push(values[`Class${index}`]);
            } else {
                classArray.push('null');
            }

            if (values[`Class${index}_grade`]) {
                gradesArray.push(values[`Class${index}_grade`]);
            } else {
                gradesArray.push('null');
            }
        }
        for (let indexCount = 1; indexCount <= 6; indexCount++) {
            classKeys.push(`class${indexCount}`);
            gradesKeys.push(`class${indexCount}_grade`);
        }
        const classValues = classArray.concat(gradesArray);
        const AllKeys = classKeys.concat(gradesKeys);
        const classInfo = classValues.concat(AllKeys);
        console.log("classArray: ", classInfo);
        return classInfo;
    };

    gatherValues = (values) => {
        console.log(values);
        let year = values.year;
        console.log("year: ", year);
        let student_number = values.student_number;
        let name = values['name'];
        let age = values['age'];
        let tardy = values['tardy'];
        let absent = values['absent'];
        const studentInfo = [student_number, name, age, year, tardy, absent, "student_number", "name", "age", "year", "tardy", "absent"];
        const classInfo = this.getGrades(values);
        console.log("studentInfo: ", studentInfo);
        console.log("classInfo: ", classInfo);
        const allInfo = studentInfo.concat(classInfo);
        allInfo.push(this.state.data['ID']);
        console.log("allInfo: ", allInfo);
        this.props.UpdateRecord_action(allInfo);
        // this.errorEditDiv.innserHTML = this.props.location.editError;

    };

    componentDidMount = () => {
        this.setState({
            data: this.props.location.state.data
        })
    };

    render() {
        console.log(this.props.location.state);
        const {handleSubmit} = this.props;
        const {data} = this.state;
        return (
            <div className={"editContainer"}>
                <form onSubmit={handleSubmit(this.gatherValues)}>
                    <h3 className={"center RightHeader row"}>{`Edit ${data.name}'s Record`}</h3>
                    <div className={"row"}>
                        <Field classdiv={"editDiv"} placeholder={data.name} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"name"} label={"Name"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.student_number} size={"s12 m3 l3 offset-s1"}
                               type={"text"}
                               name={"student_number"}
                               label={"student Number"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.age} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"age"} label={"Age"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.year} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"year"} label={"Year"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.GPA} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"GPA"} label={"GPA"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.tardy} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"tardy"}
                               label={"tardy"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.absent} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"absent"}
                               label={"absent"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.class1} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class1"}
                               label={"Class #1"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.Class1_grade} size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class1_grade"}
                               label={"Class #1 Grade"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.class2} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class2"}
                               label={"Class #2"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.class2_grade} size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class2_grade"}
                               label={"Class #2 Grade"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.class3} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class3"}
                               label={"Class #3"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.class3_grade} size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class3_grade"}
                               label={"Class #3 Grade"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.class4} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class4"}
                               label={"Class #4"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.class4_grade} size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class4_grade"}
                               label={"Class #4 Grade"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.class5} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class5"}
                               label={"Class #5"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.class5_grade} size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class5_grade"}
                               label={"Class #5 Grade"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.class6} size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class6"}
                               label={"Class #6"}
                               component={Forms}/>

                        <Field classdiv={"editDiv"} placeholder={data.class6_grade} size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class6_grade"}
                               label={"Class #6 Grade"}
                               component={Forms}/>

                        <div ref={e => this.errorEditDiv = e} className={"errorEdit hide"}></div>

                        <div className="center">
                            <button className={"btn blue pulse"}>
                                <Modal/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


function mapStateToProps({form}, {location}) {
    console.log(location);
    let initialValues = {};
    const {add_student_form} = form;
    const {state} = location;

    if (add_student_form && state && state.data) {
        const {data} = state;

        for (let [key, value] of Object.entries(data)) {
            if (value == "null" || value == "" || value == undefined || value == "N/A") {
                value = "";
                data[key] = value
            }
        }

        console.log("data obj: ", data);

        initialValues = {
            name: data.name,
            student_number: data.student_number,
            age: data.age,
            year: data.year,
            GPA: data.GPA,
            tardy: data.tardy,
            absent: data.absent,
            Class1: data.class1,
            Class1_grade: data.class1_grade,
            Class2: data.class2,
            Class2_grade: data.class2_grade,
            Class3: data.class3,
            Class3_grade: data.class3_grade,
            Class4: data.class4,
            Class4_grade: data.class4_grade,
            Class5: data.class5,
            Class5_grade: data.class5_grade,
            Class6: data.class6,
            Class6_grade: data.class6_grade,


        }
    }

    return {
        initialValues,
        // editError: state.updateRecord_reducer.errorMessage
        // classData: state.get_student_reducer.classData
    }
}

function validate({student_number, name, year, age, tardy, absent, Class1, Class1_grade, Class2, Class2_grade, Class3, Class3_grade, Class4, Class4_grade, Class5, Class5_grade, Class6, Class6_grade}) {
    const error = {};
    const classRegex = /[A-Za-z0-9]+/;
    const gradeRegex = /^\d{1,2}$/;
    const nameRegex = /^[a-z ,.'-]+$/i;
    const attendanceRegex = /^\d{1,2}$/;
    const student_numberRegex = /^\d{1,10}$/;

    if (!student_numberRegex.test(student_number)) {
        error.student_id = "Please enter a valid email"
    }

    if (!nameRegex.test(name)) {
        error.name = "Please enter a valid name, at least 4 characters"
    }

    if (!attendanceRegex.test(age)) {
        error.age = "Please enter a valid 1-99"
    }

    if (!year) {
        error.year = "please enter a valid year"
    }

    if (!attendanceRegex.test(tardy)) {
        error.tardy = "please enter a valid number 0-999"
    }

    if (!attendanceRegex.test(absent)) {
        error.absent = "please enter a valid number 0-999"
    }

    if (Class1) {
        if (!classRegex.test(Class1)) {
            error.Class1 = "Please enter a valid class"
        }
    }

    if (Class1_grade != "null" && Class1_grade != "" && Class1_grade != undefined) {
        if (!gradeRegex.test(Class1_grade)) {
            error.Class1_grade = "Please enter a valid grade, 1-100"
        }
    }

    if (Class2) {
        if (!classRegex.test(Class2)) {
            error.Class2 = "Please enter a valid class"
        }
    }


    if (Class2_grade != "null" && Class2_grade != "" && Class2_grade != undefined) {
        if (!gradeRegex.test(Class2_grade)) {
            error.Class2_grade = "Please enter a valid grade, 1-100"
        }
    }

    if (Class3) {
        if (!classRegex.test(Class2)) {
            error.Class3 = "Please enter a valid class"
        }
    }

    if (Class3_grade != "null" && Class3_grade != "" && Class3_grade != undefined) {
        if (!gradeRegex.test(Class3_grade)) {
            error.Class3_grade = "Please enter a valid grade, 1-100"
        }
    }


    if (Class4) {
        if (!classRegex.test(Class4)) {
            error.Class4 = "Please enter a valid class"
        }
    }

    if (Class4_grade != "null" && Class4_grade != "" && Class4_grade != undefined) {
        if (!gradeRegex.test(Class4_grade)) {
            error.Class4_grade = "Please enter a valid grade, 1-100"
        }
    }

    if (Class5) {
        if (!classRegex.test(Class5)) {
            error.Class5 = "Please enter a valid class"
        }
    }

    if (Class5_grade != "null" && Class5_grade != "" && Class5_grade != undefined) {
        if (!gradeRegex.test(Class5_grade)) {
            error.Class5_grade = "Please enter a valid grade, 1-100"
        }
    }

    if (Class6) {
        if (!classRegex.test(Class6)) {
            error.Class6 = "Please enter a valid class"
        }
    }

    if (Class6_grade != "null" && Class6_grade != "" && Class6_grade != undefined) {
        if (!gradeRegex.test(Class6_grade)) {
            error.Class6_grade = "Please enter a valid grade, 1-100"
        }
    }


    return (
        error
    )
}

export default connect(mapStateToProps, {
    UpdateRecord_action
})(reduxForm({
    form: "add_student_form",
    validate,
    enableReinitialize: true
})(EditPage));