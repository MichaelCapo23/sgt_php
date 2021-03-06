import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {getTeacherStudents} from '../../actions/getTeachersStudents_action'
import {Link} from 'react-router-dom';


class EditRecords extends Component {

    routeUser = (event) => {
        const ID = event.target.parentElement.id;
        const {teacher_list} = this.props;
        const timesToLoop = teacher_list.map((accum) => {return accum++});
        let indexNumber = 0;
        for(let index = 0; index < timesToLoop.length; index++) {
            if(teacher_list[index].ID == ID) {
                indexNumber = index;
            }
        }
        console.log(indexNumber);
        this.props.history.push({
            pathname: `/editPage/${ID}`,
            state: {
                id: ID,
                data: teacher_list[indexNumber],
                editError: this.props.editError
            }
        });
    };


    componentDidMount = async () => {
        let token = localStorage.getItem("token");
        await this.props.getTeacherStudents(token);
    };

    getGPA(classData, index){
        console.log(classData);
        const classArray = [classData[index].class1_grade, classData[index].class2_grade, classData[index].class3_grade, classData[index].class4_grade, classData[index].class5_grade, classData[index].class6_grade]
        let currentClassGrades = classArray.filter((index) => index != null && index != "null");
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
        let gpa = totalScore / (currentClassGrades.length);
        this.props.teacher_list[index].GPA = gpa;
        return gpa.toFixed(2);
    };


    handleStudentList = (teacher_list) => {
        for (let student in teacher_list) {
            let name = teacher_list[student].name;
            let GPA = this.getGPA(teacher_list, student);
            let year = teacher_list[student].year;
            let age = teacher_list[student].age;
            let table = document.getElementById("tr-to-get");
            let row = table.insertRow(-1);
            row.setAttribute("ID", teacher_list[student].ID);
            row.addEventListener("click", this.routeUser);
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
        this.handleStudentList(this.props.teacher_list);
    };

    makeListContainers = () => {
        return (
            <table id={"tr-to-get"} className={"highlight collection z-depth-3 col s12 m12 l12 xl12"}>
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
        const table = this.makeListContainers();
        return (
            <Fragment>
                <h2 className="center">Your Students</h2>
                <div className={"row"}>
                    {table}
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        teacher_list: state.getTeacherList_reducer.teacher_list,
        editError: state.updateRecord_reducer.errorMessage
    }
}

export default connect(mapStateToProps, {
    getTeacherStudents
})(EditRecords);