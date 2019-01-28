import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
}

export default (state = DEFAULT_STATE, action)=> {
    switch(action.type) {
        case action.SIGN_IN:
        case action.SIGN_UP:
            return {...state, auth: true};
        case action.SIGN_IN_ERROR :
            return {...state, auth: false, error: action.error};
        case action.SIGN_OUT:
            return {...state, auth: false};
    }
}
