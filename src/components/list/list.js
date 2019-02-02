import React, {Component, Fragment} from "react";
import {connect} from 'react-redux'
import {get_students_action} from '../../actions/get_students_action'

class List extends Component {
    state = {
        studentList: {},
    }

    componentDidMount = async () => {
        let token = localStorage.getItem("token");
        await this.props.get_students_action(token);

    };

    getGPA = (studentList) => {
        const classArray = [studentList.class1_grade, studentList.class2_grade, studentList.class3_grade, studentList.class4_grade, studentList.class5_grade, studentList.class6_grade,]
        let currentClassGrades = classArray.filter((index) => index != null || index != undefined);
        let totalScore = 0;
        for(var index = 0; index < currentClassGrades.length; index++) {
            totalScore = totalScore += parseFloat(currentClassGrades[index]);
        }
        let average = totalScore / currentClassGrades.length;
        return average;
    };

    handleStudentList = async (studentList) => {
        let name = studentList.name;
        let GPA = await this.getGPA(studentList);
        let year = studentList.year;
        let age = studentList.age;
        let insertTable = studentList.name.charAt("0").toUpperCase();
        let row = document.getElementById(insertTable);
        console.log(row);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = name;
        cell2.innerHTML = GPA;
        cell3.innerHTML = year;
        cell4.innerHTML = age;
    };

    componentDidUpdate = () => {
        this.handleStudentList(this.props.studentList);
    };

    makeListContainers = () => {
        return (
            <table className={"collection z-depth-3 col s12 m12 l12 xl12"}>
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
                <tr id={"tr-to-get"}>
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
        studentList: state.get_student_reducer.studentList
    }
}

export default connect(mapStateToProps, {
    get_students_action,
})(List);
