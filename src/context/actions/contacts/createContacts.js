import { CREATE_CONTACT_FAIL, CREATE_CONTACT_LOADING, CREATE_CONTACT_SUCCESS } from "../../actionTypes/actionTypes"
import axios from "../../../helpers/axiosInstance"


export default (form) => dispatch => {
    const requestPayload ={
        "country_code": form.countryCode || "",
        "first_name": form.firstName || "",
        "last_name": form.lastName || "",
        "phone_number": form.phoneNumber || "",
        "contact_picture": form.contactPicture || "",
        "is_favorite": false
        // "is_favorite": true
      }
    dispatch({
        type: CREATE_CONTACT_LOADING
    })
    axios.post('/contacts', requestPayload)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: CREATE_CONTACT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err.response)
            dispatch({
                type: CREATE_CONTACT_FAIL,
                payload: err.response
                    ? err.response.data
                    : { error: "Something went wrong, try again" }
            })
        })
}