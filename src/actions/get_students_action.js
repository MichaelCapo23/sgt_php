import types from './types';
import axios from 'axios';

export const get_students_action = (token) => dispatch => {
    try {
        axios({
            method: 'POST',
            url: '/api/list_get_students.php',
            data: {
                token
            }
        }).then((studentList) => {
            dispatch({
                type: types.GET_STUDENT,
                classData: studentList.data.classData,
                studentList: studentList.data.studentData
            })
            console.log("action log:", studentList.data.classData);
            console.log("action log:", studentList.data.studentList)
        })
    } catch {
        dispatch({
            type: types.GET_STUDENT_ERROR,
            error: "Get student list error"
        })
    }
};