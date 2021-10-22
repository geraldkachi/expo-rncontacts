import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGOUT_USER } from '../../actionTypes/actionTypes';


const LogoutUser = () => (dispatch) => {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('user');
    dispatch({
        type: LOGOUT_USER,
    });
};

export default LogoutUser