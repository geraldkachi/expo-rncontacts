import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Container, Icon } from '../../components/common'
import ContactComponent from './ContactComponent'
import useGlobal from '../../hooks'
import getContacts from '../../context/actions/contacts/getContacts'
import contactsInitialStates from '../../context/initialStates/contactsInitialStates'


const Contacts = () => {
    const { setOptions, toggleDrawer } = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const [sortBy, setSortBy] = React.useState(null);

    const {
        contactsDispatch,
        contactsState: {
            getContacts: { data, loading }
        } } = useGlobal()

        // console.log(data)
        // console.log(loading)
    useEffect(() => {
        getContacts()(contactsDispatch)
        // return () => {}
    }, [])


    useEffect(() => {
        setOptions({
            headerTitle: 'Contact',
            headerLeft: () => (
                <TouchableOpacity onPress={() => toggleDrawer()}>
                    <Icon type="material" style={{ padding: 10 }} size={25} name="menu" />
                </TouchableOpacity>
            )
        })
        return () => { }
    }, [])

    return (
        // <Container style={styles.container}>
            <ContactComponent
                {...{ modalVisible }}
                {...{ setModalVisible }}
                {...{ data }}
                {...{ loading }}
                sortBy={sortBy}
                 />
        // </Container>
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
