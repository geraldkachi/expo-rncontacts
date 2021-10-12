import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import env from "../config"

let headers = {
    // Accept: 'application/json,text/plain,*/*',
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Headers': '*',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': true,
};

const axiosInstance = axios.create({
    baseURL: env.BACKEND_URL,
    headers,
})

// console.log('env.BACKEND_URL', env.BACKEND_URL)

axiosInstance.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},
    (error) => {
        return Promise.reject(error)
    }
)
export default axiosInstance