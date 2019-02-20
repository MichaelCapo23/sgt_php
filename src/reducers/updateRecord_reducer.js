import types from '../actions/types';

const DEFAULT_STATE = {
    message: "unable to update record"
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.UPDATE_RECORD:
            return {...state, message: action.message};
        case types.UPDATE_RECORD_ERROR:
            return {...state, message: action.message};
        default:
            return state
    }
}