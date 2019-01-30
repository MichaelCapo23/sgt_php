import types from './types';
import axios from 'axios';

export const get_students_action = (token) => dispatch => {
    try {
        axios({
            method: 'GET',
            url: '/api/list_get_students.php',
            headers: {
                token: "yooooooooooo"
            }
        }).then((studentList) => {
            console.log("studentList: ", studentList);
            dispatch({
                type: types.GET_STUDENT,
                payload: studentList.data.data
            })
        })
    } catch {
        dispatch({
            type: types.GET_STUDENT_ERROR,
            error: "Get student list error"
        })
    }
}