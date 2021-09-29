import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Container } from '../../components/common'
import Icon from '../../components/common/Icon/Icon'

const Contacts = () => {
    const {setOptions, toggleDrawer} = useNavigation()

    useEffect(() => {
        setOptions({
            headerTitle:'Contact',
            headerLeft: () => (
                <TouchableOpacity onPress={()=> toggleDrawer()}>
                        <Icon type="material" style={{padding: 10}} size={25} name="menu" />
                </TouchableOpacity>
            )
        })
        return () => {}
    }, [])
    
    return (
        <Container style={styles.container}>       
           <Text>Hi Contact</Text>
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
