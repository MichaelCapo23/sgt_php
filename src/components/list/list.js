import React, {Component, Fragment} from "react";
import {connect} from 'react-redux'
import {get_students_action} from '../../actions/get_students_action'

class List extends Component {
    state = {
        studentList: "",
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
        let name = <td>{studentList.name}</td>;
        let GPA = await this.getGPA(studentList);
        GPA = <td>{GPA}</td>;
        let year = <td>{studentList.year}</td>;
        let age = <td>{studentList.age}</td> ;

    };

    componentDidUpdate = () => {
        this.handleStudentList(this.props.studentList);
    };

    makeListContainers = (startingNumber, timesToRun, ArrayToPush) => {
        startingNumber++;
        let newItem = (
            <table key={String.fromCharCode(65 + startingNumber - 1)}
                   className={"collection z-depth-1 col s12 m6 l6 xl4"}>
                <caption>{String.fromCharCode(65 + startingNumber - 1)}</caption>
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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        );
        ArrayToPush.push(newItem);
        if (startingNumber < timesToRun) {
            this.makeListContainers(startingNumber, timesToRun, ArrayToPush);
        }
        return ArrayToPush;
    }

    render() {
        console.log("student list: ", this.props.studentList);
        const containers = this.makeListContainers(0, 26, []);
        // let token = localStorage.getItem("token");
        return (
            <Fragment>
                <h2 className="center">Student List</h2>
                <div className={"row"}>
                    {containers}
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
