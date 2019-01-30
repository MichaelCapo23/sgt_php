import types from './types';
import axios from 'axios';

export const get_students_action = values => dispatch => {
    try {
        axios.get('/api/list_get_students.php', values).then((studentList) => {
            console.log("studentList: ", studentList);
            // localStorage.setItem("token", token.data.data);
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