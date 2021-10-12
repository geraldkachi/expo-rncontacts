import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import createContacts from '../../context/actions/contacts/createContacts'
import CreateContactComponent from './CreateContactComponent'
import useGlobal from "../../hooks"

const CreateContact = () => {
    const { contactsDispatch } = useGlobal()
    const [form, setForm] = useState({})

    const onChangeText = ({ name, value }) => {
        setForm({ ...form, [name]: value })
    }

    const onSubmit = () => {
        createContacts(form)(contactsDispatch)
        // console.log("submit contavts", form)
        // setForm('')
    }
    return (
        <CreateContactComponent
            {...{ form }}
            {...{ setForm }}
            {...{ onChangeText }}
            {...{ onSubmit }}
        />
    )
}

export default CreateContact

const styles = StyleSheet.create({})
