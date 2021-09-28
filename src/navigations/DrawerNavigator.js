import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { HOME_NAVIGATOR } from '../constants/routeNames'
import HomeNavigator from './HomeNavigator'
import SideMenu from './SideMenu/SideMenu'
import useGlobal from "../hooks"

const getDrawerContent = (navigation, authDispatch) => {
    return <SideMenu navigation={navigation} authDispatch={authDispatch} />
}

const DrawerNavigator = () => {
    const { authDispatch } = useGlobal()
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator drawerType="slide" drawerContent={({ navigation }) => getDrawerContent(navigation, authDispatch)}>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator

