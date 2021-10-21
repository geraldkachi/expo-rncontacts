import React, { useRef, useState } from 'react'
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

    const sheetRef = useRef(null);

    const [form, setForm] = useState({})
    const [localFile, setLocalFile] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);


    const onChangeText = ({ name, value }) => {
        setForm({ ...form, [name]: value })
    }

    const onSubmit = () => {
        createContact(form)(contactsDispatch)(() => {
            navigate(CONTACT_LIST)
        })
    }

    const toggleValueChange = () => {
        setForm({ ...form, isFavorite: !form.isFavorite })
    }

    const closeSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.close()
        }
    }

    const openSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.open()
        }
    }

    const onFileSelected = images => {
        console.log("images", images)
        closeSheet()
        setLocalFile(images)
    }
    return (
        <CreateContactComponent
            {...{ form }}
            {...{ setForm }}
            {...{ loading }}
            {...{ onChangeText }}
            {...{ onSubmit }}
            {...{ error }}
            {...{ sheetRef }}
            {...{ openSheet }}
            {...{ closeSheet }}
            {...{ localFile }}
            {...{ onFileSelected }}
            {...{ toggleValueChange }}
            {...{ setModalVisible }}
            {...{ modalVisible }}
        />
    )
}

export default CreateContact

const styles = StyleSheet.create({})
