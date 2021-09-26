import React, { useCallback, useEffect, useState } from 'react'
import {useFocusEffect} from '@react-navigation/native';
import RegisterComponent from './RegisterComponent'
import register, { clearAuthState } from '../../context/actions/auth/register'
import useGlobal from '../../hooks/useGlobal'
import { LOGIN } from '../../constants'

const Register = ({ navigation }) => {

    const {
        authDispatch, authState: { error, loading, data }
    } = useGlobal()

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    // useEffect(() => {
    //     if (data) [
    //         navigation.navigate(LOGIN)
    //     ]
    // }, [data])

    useFocusEffect(
        useCallback(() => {
            // console.log("when the page mounts")
            return () => { // cleanup up function when you leave the page
                if (data || error) {
                    clearAuthState()(authDispatch);
                }
            };
        }, [data, error]),
    );


    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value })

        if (value !== "") {
            if (name === 'password') {

                if (value.length < 6) {
                    setErrors(prev => {
                        return { ...prev, [name]: "This field is required mininum of 6 characters" }
                    })
                } else {
                    setErrors(prev => {
                        return { ...prev, [name]: null }
                    })
                }
            } else {
                setErrors(prev => {
                    return { ...prev, [name]: null }
                })
            }
        } else {
            setErrors(prev => {
                return { ...prev, [name]: "This field is required" }
            })
        }
    }
    const onSubmit = () => {
        if (!form.userName) {
            setErrors(prev => {
                return { ...prev, userName: "Please add a username" }
            })
        }
        if (!form.firstName) {
            setErrors(prev => {
                return { ...prev, firstName: "Please add a first name" }
            })
        }
        if (!form.lastName) {
            setErrors(prev => {
                return { ...prev, lastName: "Please add a last name" }
            })
        }

        if (!form.email) {
            setErrors(prev => {
                return { ...prev, email: "Please add a email" }
            })
        }

        if (!form.password) {
            setErrors(prev => {
                return { ...prev, password: "Please add a password" }
            })

            if (
                Object.values(form).length === 5 &&
                Object.values(form).every(item => item.trim().length > 0) &&
                Object.values(errors).every(item => !item)
            ) {
                register(form)(authDispatch)((response) => {
                    navigate(LOGIN, {data: response});
                });
            }
        }
    }
    return (
        <RegisterComponent
            {...{ form }}
            {...{ loading }}
            {...{ errors }}
            {...{ error }}
            {...{ onChange }}
            {...{ onSubmit }}
        />
    )
}

export default Register

