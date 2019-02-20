import types from '../actions/types';

const DEFAULT_STATE = {
    studentArray: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.GET_STUDENT:
            return {...state, studentList: action.studentList, classData: action.classData};
        case types.GET_STUDENT_ERROR:
            return {...state, message: action.error};
        default:
            return state;
    }
}