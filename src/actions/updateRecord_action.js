import types from './types';
import axios from 'axios';

export const UpdateRecord_action = (values) => dispatch => {
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
                message: successMessage.data
            })
        })
    } catch {
        dispatch({
            type: types.UPDATE_RECORD_ERROR,
            message: "Unable to update record"
        })
    }
}