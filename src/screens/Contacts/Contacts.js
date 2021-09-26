import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Container } from '../../components/common'

const Contacts = () => {
    const {setOptions, toggleDrawer} = useNavigation()

    useEffect(() => {
        setOptions({
            headerLeft: () => {
                <TouchableOpacity onPress={()=> toggleDrawer()} >
                        <Text>Touch</Text>
                </TouchableOpacity>
            }
        })
        return () => {
            
        }
    }, [])
    return (
        <Container style={styles.container}>
           Contacts
           <TouchableOpacity onPress={()=> toggleDrawer()}>
               <Text>Hlepr</Text>
           </TouchableOpacity>
        </Container>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
