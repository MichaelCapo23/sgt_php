import types from "../actions/types"

const DEFAULT_STATE = {
    MESSAGE: "Unable To Grab Students Record"
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.GET_ONE_STUNDETS_DATA:
            return {...state, gotInfo: true, record: action.record};
        case types.GET_ONE_STUNDETS_DATA_ERROR:
            return {...state, gotInfo: false, message: action.error};
        default:
            return state
    }
}