import 'react-native-gesture-handler'
import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppNavContainer from './src/navigations';
import { GlobalProvider } from "./src/context/Provider"


export default function App() {
  return (
    <GlobalProvider>        
      <AppNavContainer />    
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