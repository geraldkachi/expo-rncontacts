import { resolvePreset } from "@babel/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import env from "../config";
import { CREATE_CONTACT } from "../constants";
import { navigate } from "../navigations/RootNavigation/RootNavigation";

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
});

// console.log('env.BACKEND_URL', env.BACKEND_URL)

axiosInstance.interceptors.request.use(
  async (config) => {
    navigate(CREATE_CONTACT);
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    if (error.response.status === 403) {
      navigate(LOGOUT, { tokenExpired: true });
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);
export default axiosInstance;
