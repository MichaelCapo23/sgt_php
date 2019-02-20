import types from './types';
import axios from 'axios';

export const signInAction = values => dispatch => {
    const {email, password} = values;
    // console.log("values: ", values);
    try {
        axios({
            method: "POST",
            url: '/api/logUserIn.php',
            data: {
                email,
                password,
                token: localStorage.getItem("token")
            }
        }).then((token) => {
            console.log("info for endpoint: ", token.data);
            if(token.data.successLogin) {
                localStorage.setItem("token", token.data.token);
            }
            dispatch({
                type: types.SIGN_IN,
                payload: token.data,
                error: "invalid email and/or password"
            })
        })
    } catch {
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: "invalid email and/or password"
        })
    }
};
