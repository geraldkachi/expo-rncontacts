import 'react-native-gesture-handler'
import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppNavContainer from './src/navigations';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { GlobalProvider } from "./src/context/Provider"


export default function App() {
  return (
    <GlobalProvider>
      <SafeAreaProvider>
        <AppNavContainer />
      </SafeAreaProvider>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// yarn start --reset-cache
// expo r -c 