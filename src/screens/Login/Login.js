import { useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import loginUser from '../../context/actions/auth/loginUser'
import useGlobal from '../../hooks/useGlobal'

import LoginComponent from './LoginComponent'



const Login = ({navigation}) => {

    const {
        authDispatch, authState: { error, loading }
    } = useGlobal()

    const [form, setForm] = useState({})
    const [justSignedUp, setJustSignedUp] = useState(false);
    const {params} = useRoute();

    React.useEffect(() => {
        if (params?.data) {
          setJustSignedUp(true);
          setForm({...form, userName: params.data.username});
        }
      }, [params]);


    const onSubmit = () => {
        if (form.userName && form.password) {
            setJustSignedUp(false);
            loginUser(form)(authDispatch)
            setForm('')
        }
    }

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value })
    }

    return (
        <LoginComponent {...{ form }}
            {...{ loading }}
            // {...{ errors }}
            {...{ error }}
            {...{ onChange }}
            {...{ onSubmit }}
            {...{ navigation }} 
            justSignedUp={justSignedUp}/>
    )
}

export default Login
