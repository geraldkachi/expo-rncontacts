import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SettingsComponent from './SettingsComponent'

const Settings = () => {

    const [email, setEmail] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    const settingsOptions = [
        {title: 'My Info', subTitle: 'Setup your profile', onPress: () => {}},
        {title: 'Accounts', subTitle: null, onPress: () => {}},
        {title: 'Default account for new contacts', subTitle: email, onPress: () => {}},
        // {title: 'Default account for new contacts', subTitle: null, onPress: () => {}},
        {title: 'Contacts to display', subTitle: 'All contacts', onPress: () => {}},
        {title: 'Sort by', subTitle: "first name", onPress: () => { setModalVisible(true) }},
      //   {title: 'Sort by', subTitle: sortBy, onPress: () => { setModalVisible(true) }},
        {title: 'Name format', subTitle: 'First name first', onPress: () => {}},
        {title: 'Import', subTitle: null, onPress: () => {}},
        {title: 'Export', subTitle: null, onPress: () => {}},
        {title: 'Blocked numbers', subTitle: null, onPress: () => {}},
        {title: 'About RNContacts', subTitle: null, onPress: () => {}},
      ];

      const prefArr = [
          {name: "First Name", selected: false, onPress: () => {},},
          {name: "Last Name", selected: false, onPress: () => {}},
      ]


    const getSettings  = async () => {
        const user = await AsyncStorage.getItem("user")
        setEmail(JSON.parse(user).email)
    }

    useEffect(() => {
      getSettings()
    }, [])

    return (
        <View>
            <SettingsComponent 
            {...{ settingsOptions }}
            {...{ modalVisible }}
            {...{ setModalVisible }}
            {...{ prefArr }}
             />
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})
