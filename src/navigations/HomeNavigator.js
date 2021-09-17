import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants'
import Contacts from "../screens/Contacts"
import ContactDetail from "../screens"
import CreateContact from "../screens"
import Settings from "../screens"

const HomeNavigator = () => {
    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Screen initialParams={CONTACT_LIST}> 
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
            <HomeStack.Screen name={SETTINGS} component={Settings} />
        </HomeStack.Screen>
    )
}

export default HomeNavigator
