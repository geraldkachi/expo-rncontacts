import React, { useState } from 'react'
import RegisterComponent from './RegisterComponent'

const Register = () => {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

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
        }
    }
    return (<RegisterComponent
        {...{ form }}
        {...{ errors }}
        onChange={onChange}
        onSubmit={onSubmit}
    />)
}

export default Register

