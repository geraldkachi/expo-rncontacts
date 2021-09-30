import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Container, Icon } from '../../components/common'
import ContactComponent from './ContactComponent'


const Contacts = () => {
    const {setOptions, toggleDrawer} = useNavigation()
    const [modalVisible ,setModalVisible] = useState(false)


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
           <ContactComponent {...{ modalVisible }} {...{ setModalVisible }} />
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
