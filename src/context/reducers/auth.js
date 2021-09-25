import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../actionTypes/actionTypes";

// const auth = (state, action) => {}
const auth = (state, { type, payload }) => {

    switch (type) {
        case REGISTER_LOADING:
            return {
                ...state,
                loading: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload
            };
        case REGISTER_FAIL:
            return {
                ...state,
                loading: true,
                error: payload
            };
        case CLEAR_AUTH_STATE:
            return {
                ...state,
                loading: false,
                data: null,
                error: null
            }
        default:
            return state;
    }
}

export default auth