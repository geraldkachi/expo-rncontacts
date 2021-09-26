import axiosInstance from "../../../helpers/axiosInterceptor"
import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../actionTypes/actionTypes"


export const clearAuthState = () => dispatch => {
    dispatch({
        type: CLEAR_AUTH_STATE
    })
}

const register = ({
    userName: username,
    firstName: first_name,
    lastName: last_name,
    email,
    password
}) => dispatch => {
    dispatch({
        type: REGISTER_LOADING
    })
    axiosInstance.post('auth/register', {
        username,
        first_name,
        last_name,
        email,
        password
    })
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response 
            ? err.response.data 
            : {error: "Opps Something went wrong, try again"}
        })
    })
}

export default register