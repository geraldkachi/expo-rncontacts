import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet } from 'react-native'
import createContact from '../../context/actions/contacts/createContact'
import CreateContactComponent from './CreateContactComponent'
import useGlobal from "../../hooks"
import { useNavigation, useRoute } from '@react-navigation/core'
import { CONTACT_LIST } from '../../constants'

const CreateContact = () => {
    const { navigate } = useNavigation()

    const { contactsDispatch, contactsState: {
        createContact: { data, loading, error } }
    } = useGlobal()
    
    
    const [form, setForm] = useState({})
    const [localFile, setLocalFile] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    
    const sheetRef = useRef(null);
    const {params, name, key} = useRoute();

    // //////////////////
    
    useEffect(() => {
        if (params?.contact) {
          setOptions({title: 'Update contact'});
          const {
            first_name: firstName,
            phone_number: phoneNumber,
            last_name: lastName,
            is_favorite: isFavorite,
            country_code: countryCode,
          } = params?.contact;
    
          setForm((prev) => {
            return {
              ...prev,
              firstName,
              isFavorite,
              phoneNumber,
              lastName,
              phoneCode: countryCode,
            };
          });
    
          const country = countryCodes.find((item) => {
            return item.value.replace('+', '') === countryCode;
          });
    
          if (country) {
            setForm((prev) => {
              return {
                ...prev,
                countryCode: country.key.toUpperCase(),
              };
            });
          }
    
          if (params?.contact?.contact_picture) {
            setLocalFile(params?.contact.contact_picture);
          }
        }
      }, []);

    // //////////////////

    
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
