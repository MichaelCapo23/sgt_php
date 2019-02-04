import types from '../actions/types';

const DEFAULT_STATE = {
    message: "could not get teacher list"
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_TEACHER_LIST:
            return {...state, teacher_list : action.payload};
        case types.GET_TEACHER_LIST_ERROR:
            return {...state, message: action.message};
        default:
            return state
    }
}