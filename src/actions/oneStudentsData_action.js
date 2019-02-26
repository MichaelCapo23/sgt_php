import "axios";
import types from '../actions/types'

export const oneStudentsData_action = (token) => dispatch => {
    try {
        axios({
            method: "POST",
            url: "/api/oneStudentsData.php",
            data : {
                token
            }
        }).then((record) => {
            dispatch({
                type : types.GET_ONE_STUNDETS_DATA,
                record: record
            })

        })
    } catch {
        dispatch({
            type: types.GET_ONE_STUNDETS_DATA_ERROR,
            message: "Unable To Get Students Record"
        })
    }
}