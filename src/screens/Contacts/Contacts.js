import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Contacts = () => {
    return (
        <View style={styles.container}>
            <Text>Contacts</Text>
        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})
