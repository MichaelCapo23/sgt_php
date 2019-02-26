import React, {Component} from "react";
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import Forms from "../../helpers";
import {oneStudentsData_action} from '../../actions/oneStudentsData_action'


class StudentData extends Component {
    state = {
        data: "",
    }

    componentDidMount = async () => {
        let pathName = window.location.pathname;
        console.log(pathName);
        let slashAndID = pathName.slice(pathName.lastIndexOf("/"), pathName.length);
        let ID = slashAndID.slice(1, slashAndID.length);
        this.props.oneStudentsData_action(ID);
    };

    // routeUser = (event) => {
    //     const ID = event.target.parentElement.id;
    //     const {teacher_list} = this.props;
    //     const timesToLoop = teacher_list.map((accum) => {return accum++});
    //     let indexNumber = 0;
    //     for(let index = 0; index < timesToLoop.length; index++) {
    //         if(teacher_list[index].ID == ID) {
    //             indexNumber = index;
    //         }
    //     }
    //     console.log("studentIWantInfo: ", teacher_list[indexNumber])
    //
    // };

    // getGPA = (classData, index) => {
    //     console.log(classData);
    //     const classArray = [classData[index].class1_grade, classData[index].class2_grade, classData[index].class3_grade, classData[index].class4_grade, classData[index].class5_grade, classData[index].class6_grade]
    //     let currentClassGrades = classArray.filter((index) => index != null || index != undefined);
    //     let totalScore = 0;
    //     for (let index = 0; index < currentClassGrades.length; index++) {
    //         if (currentClassGrades[index] > 89.9) {
    //             totalScore += 4
    //         } else if (currentClassGrades[index] > 79.9) {
    //             totalScore += 3;
    //         } else if (currentClassGrades[index] > 69.9) {
    //             totalScore += 2;
    //         } else if (currentClassGrades[index] > 59.9) {
    //             totalScore += 1;
    //         } else {
    //             totalScore += 0;
    //         }
    //     }
    //     let gpa = totalScore / currentClassGrades.length;
    //     return gpa.toFixed(2);
    // };
    //
    // getGrades = (values) => {
    //     let classArray = [];
    //     let gradesArray = [];
    //     let classKeys = [];
    //     let gradesKeys = [];
    //     let indexCount = 0;
    //     for (let index = 1; index <= 6; index++) {
    //         if (values[`Class${index}`]) {
    //             classArray.push(values[`Class${index}`]);
    //         } else {
    //             classArray.push('null');
    //         }
    //
    //         if (values[`Class${index}_grade`]) {
    //             gradesArray.push(values[`Class${index}_grade`]);
    //         } else {
    //             gradesArray.push('null');
    //         }
    //     }
    //     for (let indexCount = 1; indexCount <= 6; indexCount++) {
    //         classKeys.push(`class${indexCount}`);
    //         gradesKeys.push(`class${indexCount}_grade`);
    //     }
    //     const classValues = classArray.concat(gradesArray);
    //     const AllKeys = classKeys.concat(gradesKeys);
    //     const classInfo = classValues.concat(AllKeys);
    //     console.log("classArray: ", classInfo);
    //     return classInfo;
    // };

    render() {
        console.log(this.props.location.state);
        const {data} = this.state;
        return (
            <div className={"editContainer"}>
                <h3 className={"center RightHeader row"}>{`${data.name}`}</h3>
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
                        <Link to={"/"} className={"btn blue pulse"}>Student Grade Table</Link>
                    </div>
                </div>
            </div>
        )
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

})(StudentData));