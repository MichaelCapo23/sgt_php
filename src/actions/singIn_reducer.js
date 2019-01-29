import types from './types';
import axios from 'axios';

export const signIn = values => dispatch => {
    try {
        axios.get('/api/singIn', values).then((token) => {
            console.log("token: ", token);
            // localStorage.setItem("token", token.data.data);
            dispatch({
                type: types.SIGN_IN,
                payload: token.data.data
            })
        })
    } catch {
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: "invalid email and/or password"
        })
    }
}