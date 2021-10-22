import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SettingsComponent from './SettingsComponent'


const Settings = () => {

    const [email, setEmail] = useState(null)
    const [sortBy, setSortBy] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    const saveSetting = (key, value) => {
      AsyncStorage.setItem(key, value);
  };

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
          {name: "First Name", selected: sortBy === "First Last", onPress: () => { 
            saveSetting('sortBy', 'First Name');
            setModalVisible(false)
            setSortBy("First Name")
          }},
          {name: "Last Name", selected: sortBy === "Last Last", onPress: () => { 
            saveSetting('sortBy', 'Last Name');
            setModalVisible(false)
            setSortBy("Last Name")
          }},
      ]


    const getSettings  = async () => {
        const user = await AsyncStorage.getItem("user")
        setEmail(JSON.parse(user).email)

        const sortPref = await AsyncStorage.getItem('sortBy');
        if (sortPref) {
          setSortBy(sortPref);
        }
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
