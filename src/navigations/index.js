import React, { useContext} from "react"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaView, StatusBar } from "react-native"
import AuthNavigator from "./AuthNavigator"
import DrawerNavigator from "./DrawerNavigator"
import useGlobal from "../hooks"

const AppNavContainer = () => {
    const { authState: { isLoggedIn } } = useGlobal()
    console.log(isLoggedIn, "isLoggedIn")

    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
            </SafeAreaView>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator /> }
        </NavigationContainer>
    )
}

export default AppNavContainer
