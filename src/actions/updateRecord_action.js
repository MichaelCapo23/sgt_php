import types from './types';
import axios from 'axios';

export const UpdateRecord_action = (values) => dispatch => {
    debugger;
    try {
        axios({
            method: "POST",
            url: "/api/updateRecord.php",
            data: {
                values
            }
        }).then((successMessage) => {
            dispatch({
                type: types.UPDATE_RECORD,
                message: successMessage.data,
            })
        })
    } catch {
        debugger;
        dispatch({
            type: types.UPDATE_RECORD,
            message: "Unable to update record"
        })
    }
    debugger;
    dispatch({
        type: types.UPDATE_RECORD,
        message: "Unable to update record"
    })
};