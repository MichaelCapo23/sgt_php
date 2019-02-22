import types from './types';
import axios from 'axios';

export const addStudent_action = (values) => dispatch => {
    debugger;
    try {
        console.log("parameters: ", values);
        console.log("reducer");
        axios({
            method: "POST",
            url: "/api/addStudentRecord.php",
            data : {
                values,
            }
        }).then((studentRecords) => {
            dispatch({
                type: types.ADD_STUDENT,
                payload: studentRecords.data,
                message: false
            })
        })
    } catch {
        dispatch({
            type: types.ADD_STUDENT_ERROR,
            payload: "Unable to add student record",
            message: "Unable to add student record"
        })
    }
    debugger;
    dispatch({
        type: types.ADD_STUDENT,
        payload: "Unable to add student record",
        message: "Unable to add student record"
    })
};