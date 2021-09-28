import AsyncStorage from "@react-native-async-storage/async-storage"
import axiosInstance from "../../../helpers/axiosInterceptor"
import {  LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../../actionTypes/actionTypes"


const loginUser = ({ userName: username, password }) => dispatch => {
    
    dispatch({
        type: LOGIN_LOADING
    })
    axiosInstance.post('auth/login', {
        username,
        password
    })
    .then(res => {
        AsyncStorage.setItem('token', res.data)
        AsyncStorage.setItem('user', JSON.stringify(res.data))
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