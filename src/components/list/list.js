import React, {Component, Fragment} from "react";
import {connect} from 'react-redux'
import {get_students_action} from '../../actions/get_students_action'
import get_student_reducer from "../../reducers/get_student_reducer";

class List extends Component {

    componentDidMount = () => {
        this.props.get_students_action()

    }

    makeListContainers = (startingNumber, timesToRun, ArrayToPush) => {
        startingNumber++;
        let newItem = (
            <div key={String.fromCharCode(65 + startingNumber - 1)} className={"collection z-depth-3 col s12 m6 l6 xl4"}>{String.fromCharCode(65 + startingNumber - 1)}
                <div className="collection-item">
                    <div>mike jones 64 64 64 64 64 90</div>
                    <div>mike jones 64 64 64 64 64 90</div>
                </div>
            </div>
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

        return (
            <Fragment>
                <h2 className="center">Student Grade Table</h2>
                <div className={"row"}>
                    {containers}
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        studentList : state.get_student_reducer.studentList
    }
}

export default connect(mapStateToProps, {
    get_students_action,
})(List);
