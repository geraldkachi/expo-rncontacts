import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppModal, ReuseableButton } from '../../components/common'

const ContactComponent = ({ modalVisible, setModalVisible }) => {
    return (
        <View>
            <AppModal {...{ modalVisible }} {...{ setModalVisible }} />
            <ReuseableButton title="Open Modal" danger onPress={() => setModalVisible(prev => !prev)} />
        </View>
    )
}

export default ContactComponent

const styles = StyleSheet.create({})
