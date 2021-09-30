import React from 'react'
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ReuseableButton } from '..'
import colors from '../../../assets/theme/colors'

export const AppModal = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal visible={modalVisible} transparent style={{justifyContent:'center', alignItems:"center"}}>
            <Text>AppModal</Text>
                <Text style={{color: colors.white}}>AppModal</Text>

                <TouchableOpacity style={styles.wrapper} omPress={() => setModalVisible(true)}>
                    <View style={styles.modalWrapper}>
                        <ScrollView scrollEnabled={false}>
                        <ReuseableButton title="Open Modal" danger onPress={() => setModalVisible(prev => !prev)} />
                        </ScrollView>
                    </View>
                </TouchableOpacity>
        </Modal>
    )
}

// export default AppModal

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex:1,
        justifyContent:'center'
    },
    modalWrapper: {
        backgroundColor: colors.white,
        minHeight: 300,
        marginHorizontal: 20
    }
})
