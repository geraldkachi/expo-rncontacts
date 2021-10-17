import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../helpers/axiosInstance"
import {  LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../../actionTypes/actionTypes"


const loginUser = ({ userName: username, password }) => dispatch => {
    
    dispatch({
        type: LOGIN_LOADING
    })
    axios.post('auth/login', {
        username,
        password
    })
    .then(res => {
        AsyncStorage.setItem('token', JSON.stringify(res.data.token))
        AsyncStorage.setItem('user', JSON.stringify(res.data.user))
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response
            ? err.response.data
            : {error: "Opps Something went wrong, try again"}
        })
    })
}

export default loginUser