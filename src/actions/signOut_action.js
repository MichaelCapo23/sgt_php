import types from "./types";
import axios from "axios";

export const signOutAction = () => dispatch => {
    try {
        axios({
            method: "POST",
            url : "/api/signOut_User.php"
        }).then((signedOutComfirmation) => {
            localStorage.clear();
            dispatch({
                type: types.SIGN_OUT,
                confirmation: signedOutComfirmation.data.signedOut
            })
        })
    } catch {
        localStorage.clear();
        dispatch({
            type: types.SIGN_OUT_ERROR,
            error: "failed to sign you out",
        })
    }
};