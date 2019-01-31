import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
};

export default (state = DEFAULT_STATE, action)=> {
    switch(action.type) {
        case types.SIGN_IN:
        case types.SIGN_UP:
            if(action.payload.successLogin) {
                return {...state, auth: true, token: action.payload};
            } else {
                return {...state, auth: false, token: action.payload, error: action.error};
            }
        case types.SIGN_IN_ERROR :
            return {...state, auth: false, error: action.error};
        case types.SIGN_OUT:
            return {...state, auth: false};
        case types.SIGN_OUT_ERROR:
            return {...state, auth: false, error: action.error};
        default:
            return state;
    }
}

