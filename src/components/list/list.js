import React, {Component, Fragment} from "react";
import {connect} from 'react-redux'
import {get_students_action} from '../../actions/get_students_action'

class List extends Component {
    state = {
        studentList: {},
        classData: {},
    }

    componentDidMount = async () => {
        let token = localStorage.getItem("token");
        await this.props.get_students_action(token);

    };

    getGPA = (classData) => {
        const classArray = [classData.class1_grade, classData.class2_grade, classData.class3_grade, classData.class4_grade, classData.class5_grade, classData.class6_grade,]
        let currentClassGrades = classArray.filter((index) => index != null || index != undefined);
        let totalScore = 0;
        for(let index = 0; index < currentClassGrades.length; index++) {
            totalScore = totalScore += parseFloat(currentClassGrades[index]);
        }
        let average = totalScore / currentClassGrades.length;
        return average.toFixed(2);
    };

    handleStudentList = (studentList, classData) => {
        for(let student in studentList) {
            let name = studentList[student].name;
            let GPA = this.getGPA(classData[student]);
            let year = studentList[student].year;
            let age = studentList[student].age;
            let table = document.getElementById("tr-to-get");
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            cell1.innerHTML = name;
            cell2.innerHTML = GPA;
            cell3.innerHTML = year;
            cell4.innerHTML = age;
        }
    };

    componentDidUpdate = () => {
        this.handleStudentList(this.props.studentList, this.props.classData);
    };

    makeListContainers = () => {
        return (
            <table id={"tr-to-get"} className={"highlight collection z-depth-3 col s12 m12 l12 xl12"}>
                {/*<caption></caption>*/}
                <thead className="collection-item">
                <tr>
                    <th>Name</th>
                    <th>GPA</th>
                    <th>Year</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                </tr>
                </tbody>
            </table>
        );
    }

    render() {
        console.log("student list: ", this.props.studentList);
        const table = this.makeListContainers();
        // let token = localStorage.getItem("token");
        return (
            <Fragment>
                <h2 className="center">Student List</h2>
                <div className={"row"}>
                    {table}
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        studentList: state.get_student_reducer.studentList,
        classData: state.get_student_reducer.classData
    }
}

export default connect(mapStateToProps, {
    get_students_action,
})(List);
