import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { ActivityIndicator, SafeAreaView, StatusBar } from "react-native"
import AuthNavigator from "./AuthNavigator"
import DrawerNavigator from "./DrawerNavigator"
import AsyncStorage from "@react-native-async-storage/async-storage"
// import SplashScreen from 'react-native-splash-screen';
import useGlobal from "../hooks"
import { navigatiobRef } from "./RootNavigation/RootNavigation"

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

    return (
        <> 
            {authLoaded ?
                <NavigationContainer ref={navigatiobRef}>
                    <StatusBar barStyle="dark-content" />
                    {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
                </NavigationContainer>
                : <ActivityIndicator />
            }
        </>
    )
}

export default AppNavContainer
