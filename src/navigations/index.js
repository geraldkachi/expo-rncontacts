import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { ActivityIndicator, SafeAreaView, StatusBar } from "react-native"
import AuthNavigator from "./AuthNavigator"
import DrawerNavigator from "./DrawerNavigator"
import AsyncStorage from "@react-native-async-storage/async-storage"
import SplashScreen from 'react-native-splash-screen';
import useGlobal from "../hooks"

const AppNavContainer = () => {
    const { authState: { isLoggedIn } } = useGlobal()

    const [isAuthenticated, setisAuthenticated] = useState(isLoggedIn)
    const [authLoaded, setAuthLoaded] = React.useState(false);

    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem("user")
            if (user) {
                setAuthLoaded(true);
                setisAuthenticated(true)
            } else {
                setAuthLoaded(true);
                setisAuthenticated(false)
            }

        } catch (error) {

        }
    }
    useEffect(() => {
        getUser()
        // return () => {}
    }, [isLoggedIn])
    useEffect(() => {
        // SplashScreen.hide();
    }, []);
    console.log(isLoggedIn, "isLoggedIn")

    return (
        <> {authLoaded ?
            <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
            </SafeAreaView>
            {isAuthenticated || isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
        : <ActivityIndicator />
        }
        </>
    )
}

export default AppNavContainer
