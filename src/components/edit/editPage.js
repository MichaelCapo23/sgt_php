import React, {Component} from "react";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux"
import {UpdateRecord_action} from '../../actions/updateRecord_action';
import Forms from "../../helpers";


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
        let gradesKeys =[];
        let indexCount = 0;
        for(let index in values) {
            indexCount++;
        }
        const numberOfClasses = (indexCount - 5) / 2;
        console.log(numberOfClasses);
        for(let index = 1; index <= 6; index++) {
            if(values[`class_${index}`]) {
                classArray.push(values[`class_${index}`]);
            } else {
                classArray.push('null');
            }

            if(values[`grade_${index}`]) {
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

    test = (values) => {
        debugger;
        console.log(values);
        let year = values['year'];
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
        this.props.UpdateRecord_action(allInfo);
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
                <form  onSubmit={handleSubmit(this.test)}>
                    <h3 className={"center RightHeader row"}>{`Edit ${data.name}'s Record`}</h3>
                    <div className={"row"}>
                        <Field placeholder={data.name} size={"s4"} type={"text"} name={"name"} label={"Name"}
                               component={Forms}/>

                        <Field placeholder={data.student_number} size={"s4"} type={"text"} name={"student_number"} label={"student Number"}
                               component={Forms}/>

                        <Field placeholder={data.age} size={"s4"} type={"text"} name={"age"} label={"Age"}
                               component={Forms}/>

                        <Field placeholder={data.year} size={"s4"} type={"text"} name={"year"} label={"Year"}
                               component={Forms}/>

                        <Field placeholder={data.GPA} size={"s4"} type={"text"} name={"GPA"} label={"GPA"}
                               component={Forms}/>

                        <Field placeholder={data.tardy} size={"s4"} type={"text"} name={"tardy"} label={"tardy"}
                               component={Forms}/>

                        <Field placeholder={data.absent} size={"s4"} type={"text"} name={"absent"} label={"absent"}
                               component={Forms}/>

                        <Field placeholder={data.class1} size={"s4"} type={"text"} name={"Class1"} label={"Class #1"}
                               component={Forms}/>

                        <Field placeholder={data.Class1_grade} size={"s4"} type={"text"} name={"Class1_grade"} label={"Class #1 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class2} size={"s4"} type={"text"} name={"Class2"} label={"Class #2"}
                               component={Forms}/>

                        <Field placeholder={data.class2_grade} size={"s4"} type={"text"} name={"Class2_grade"} label={"Class #2 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class3} size={"s4"} type={"text"} name={"Class3"} label={"Class #3"}
                               component={Forms}/>

                        <Field placeholder={data.class3_grade} size={"s4"} type={"text"} name={"Class3_grade"} label={"Class #3 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class4} size={"s4"} type={"text"} name={"Class4"} label={"Class #4"}
                               component={Forms}/>

                        <Field placeholder={data.class4_grade} size={"s4"} type={"text"} name={"Class4_grade"} label={"Class #4 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class5} size={"s4"} type={"text"} name={"Class5"} label={"Class #5"}
                               component={Forms}/>

                        <Field placeholder={data.class5_grade} size={"s4"} type={"text"} name={"Class5_grade"} label={"Class #5 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class6} size={"s4"} type={"text"} name={"Class6"} label={"Class #6"}
                               component={Forms}/>

                        <Field placeholder={data.class6_grade} size={"s4"} type={"text"} name={"Class6_grade"} label={"Class #6 Grade"}
                               component={Forms}/>

                        <div className="center">
                            <button className={"btn blue pulse"}>Commit Changes</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


function mapStateToProps({form}, {location}) {
    let initialValues = {};
    const { add_student_form } = form;
    const { state } = location;

    if(add_student_form && state && state.data){
        const { data } = state;

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
        initialValues
    }
}

function validate({student_number, name, year, age, tardy, absent}) {
// , Class1, Class1_grade, Class2, Class2_grade, Class3, Class3_grade, Class4, Class4_grade, Class5, Class5_grade, Class6, Class6_grade
    debugger;
    const error = {};

    if (!student_number) {
        error.student_id = "Please enter a valid email"
    }

    if (!name) {
        error.name = "Please enter a valid name, at least 4 characters"
    }

    if (!age) {
        error.age = "Please enter a valid 1-99"
    }

    if(!year) {
        error.year = "please enter a valid year"
    }

    if(!tardy) {
        error.tardy = "please enter a valid number 0-999"
    }

    if(!absent) {
        error.absent = "please enter a valid number 0-999"
    }

    // if (!Class1) {
    //     error.Class1 = "Please enter a valid class"
    // }
    //
    // if (!Class1_grade) {
    //     error.Class1_grade = "Please enter a valid grade, 1-100"
    // }
    //
    // if (!Class2) {
    //     error.Class2 = "Please enter a valid class"
    // }
    //
    // if (!Class2_grade) {
    //     error.Class2_grade = "Please enter a valid grade, 1-100"
    // }
    //
    // if (!Class3) {
    //     error.Class3 = "Please enter a valid class"
    // }
    //
    // if (!Class3_grade) {
    //     error.Class3_grade = "Please enter a valid grade, 1-100"
    // }
    //
    // if (!Class4) {
    //     error.Class4 = "Please enter a valid class"
    // }
    //
    // if (!Class4_grade) {
    //     error.Class4_grade = "Please enter a valid grade, 1-100"
    // }
    //
    // if (!Class5) {
    //     error.Class5 = "Please enter a valid class"
    // }
    //
    // if (!Class5_grade) {
    //     error.Class5_grade = "Please enter a valid grade, 1-100"
    // }
    //
    // if (!Class6) {
    //     error.Class6 = "Please enter a valid class"
    // }
    //
    // if (!Class6_grade) {
    //     error.Class6_grade = "Please enter a valid grade, 1-100"
    // }
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