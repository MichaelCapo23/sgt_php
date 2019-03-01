import types from '../actions/types';

const DEFAULT_STATE = {
    studentAdded: false,
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.ADD_STUDENT:
            return {...state, studentAdded: true, studentInfo: action.payload, error: action.message};
        case types.ADD_STUDENT_ERROR:
            return {...state, studentAdded: false, error: action.error};
        default:
            return state
    }
}