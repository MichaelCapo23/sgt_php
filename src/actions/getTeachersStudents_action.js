import types from '../actions/types'
import axios from 'axios';

export const getTeacherStudents = (token) => dispatch => {

    try {
        axios({
            method : "POST",
            url : "/api/getTeachersStudents.php",
            data : {
                token
            }
        }).then((teachersList) => {
            console.log("teacherList: ", teachersList);
            dispatch({
                type : types.GET_TEACHER_LIST,
                payload: teachersList.data.studentData,
            })
        })
    } catch {
        dispatch({
            type : types.GET_TEACHER_LIST_ERROR,
            message: "cannot get student list"
        })
    }
};