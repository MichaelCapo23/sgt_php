import React, {Component} from "react";
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import Forms from "../../helpers";
import {oneStudentsData_action} from '../../actions/oneStudentsData_action'


class StudentData extends Component {
    state = {
        data: null,
    }

    componentDidMount = () => {
        let pathName = window.location.pathname;
        console.log(pathName);
        let slashAndID = pathName.slice(pathName.lastIndexOf("/"), pathName.length);
        let ID = slashAndID.slice(1, slashAndID.length);
        this.props.oneStudentsData_action(ID);
        if (this.props.studentData != undefined && this.state.data == null && this.props.studentData.ID === ID) {
            for (let [key, value] of Object.entries(this.props.studentData)) {
                if (value == "null" || value == "" || value == undefined || value == "N/A") {
                    value = "N/A";
                    this.props.studentData[key] = value
                }
            }
            this.setState({
                data: this.props.studentData
            })
        }
    };

    getGPA = (classData) => {
        console.log(classData);
        const classArray = [classData[0], classData[1], classData[2], classData[3], classData[4], classData[5]];
        let currentClassGrades = classArray.filter((index) => index != null && index != undefined && index != "N/A");
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
        let gradesArray = [];
        let indexCount = 0;
        for (let index = 1; index <= 20; index++) {
            if (values[`class${index}_grade`]) {
                gradesArray.push(values[`class${index}_grade`]);
            }
        }
        let GPA = this.getGPA(gradesArray);
        return GPA
    };

    componentDidUpdate = () => {
        if (this.props.studentData != undefined && this.state.data == null) {
            for (let [key, value] of Object.entries(this.props.studentData)) {
                if (value == "null" || value == "" || value == undefined || value == "N/A") {
                    value = "N/A";
                    this.props.studentData[key] = value
                }
            }
            this.setState({
                data: this.props.studentData
            })

        }
    }

    render() {
        if (this.props.studentData != undefined && this.state.data != null) {
            const GPA = this.getGrades(this.state.data)
            return (
                <div className={"editContainer"}>
                    <h3 className={"center RightHeader row"}>{`${this.state.data ? this.state.data.name : ""}`}</h3>
                    <div className={"row"}>
                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               classdiv={"editDiv"} placeholder={this.state.data ? this.state.data.name : ""}
                               size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"name"} label={"Name"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               classdiv={"editDiv"} placeholder={this.state.data ? this.state.data.student_number : ""}
                               size={"s12 m3 l3 offset-s1"}
                               type={"text"}
                               name={"student_number"}
                               label={"student Number"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               classdiv={"editDiv"} placeholder={this.state.data ? this.state.data.age : ""}
                               size={"s12 m3 l3 offset-s1"}
                               type={"text"}
                               name={"age"} label={"Age"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               classdiv={"editDiv"} placeholder={this.state.data ? this.state.data.year : ""}
                               size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"year"} label={"Year"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={GPA} classdiv={"editDiv"}
                               size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"GPA"} label={"GPA"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.tardy : ""}
                               classdiv={`${this.state.data.tardy == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"tardy"}
                               label={"tardy"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.absent : ""} classdiv={"editDiv"}
                               size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"absent"}
                               label={"absent"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class1 : ""}
                               classdiv={`${this.state.data.class1 == "N/A" ? "hide" : ""} class1 editDiv`}
                               size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class1"}
                               label={"Class #1"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class1_grade : ""}
                               classdiv={`${this.state.data.class1_grade == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class1_grade"}
                               label={"Class #1 Grade"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class2 : ""}
                               classdiv={`${this.state.data.class2 == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class2"}
                               label={"Class #2"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class2_grade : ""}
                               classdiv={`${this.state.data.class2_grade == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class2_grade"}
                               label={"Class #2 Grade"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class3 : ""}
                               classdiv={`${this.state.data.class3 == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class3"}
                               label={"Class #3"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class3_grade : ""}
                               classdiv={`${this.state.data.class3_grade == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class3_grade"}
                               label={"Class #3 Grade"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class4 : ""}
                               classdiv={`${this.state.data.class4 == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class4"}
                               label={"Class #4"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class4_grade : ""}
                               classdiv={`${this.state.data.class4_grade == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class4_grade"}
                               label={"Class #4 Grade"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class5 : ""}
                               classdiv={`${this.state.data.class5 == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class5"}
                               label={"Class #5"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class5_grade : ""}
                               classdiv={`${this.state.data.class5_grade == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class5_grade"}
                               label={"Class #5 Grade"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class6 : ""}
                               classdiv={`${this.state.data.class6 == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"} type={"text"}
                               name={"Class6"}
                               label={"Class #6"}
                               component={Forms}/>

                        <Field disabled={"disabled"} inputClass={"colorDark"}
                               placeholder={this.state.data ? this.state.data.class6_grade : ""}
                               classdiv={`${this.state.data.class6_grade == "N/A" ? "hide" : ""} editDiv`}
                               size={"s12 m3 l3 offset-s1"}
                               type={"text"} name={"Class6_grade"}
                               label={"Class #6 Grade"}
                               component={Forms}/>

                        <div ref={e => this.errorEditDiv = e} className={"errorEdit hide"}></div>

                        <div className="class1 center">
                            <Link to={"/"} className={"returnBTN btn blue pulse"}>Student Grade Table</Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        studentData: state.oneStudentsData_reducer.record
    }
}

export default connect(mapStateToProps, {
    oneStudentsData_action
})(reduxForm({
    form: 'studentData-form',
    // validate
})(StudentData));