import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import createContact from '../../context/actions/contacts/createContact'
import CreateContactComponent from './CreateContactComponent'
import useGlobal from "../../hooks"
import { useNavigation } from '@react-navigation/core'
import { CONTACT_LIST } from '../../constants'

const CreateContact = () => {
    const { navigate } = useNavigation()
    const { contactsDispatch, contactsState: {
        createContact: { data, loading, error } }
    } = useGlobal()
    const [form, setForm] = useState({})

    const onChangeText = ({ name, value }) => {
        setForm({ ...form, [name]: value })
    }

    const onSubmit = () => {
        createContact(form)(contactsDispatch)(() => {
            navigate(CONTACT_LIST)
        })
    }

    const toggleValueChange = () => {
        setForm({ ...form, "isFavorite": form.isFavorite })
    }
    return (
        <CreateContactComponent
            {...{ form }}
            {...{ setForm }}
            {...{ loading }}
            {...{ onChangeText }}
            {...{ onSubmit }}
            {...{ error }}
            {...{ toggleValueChange }}
        />
    )
}

export default CreateContact

const styles = StyleSheet.create({})
