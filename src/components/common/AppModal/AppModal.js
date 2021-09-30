import React from 'react'
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon, ReuseableButton } from '..'
import colors from '../../../assets/theme/colors'

export const AppModal = ({ modalVisible, setModalVisible, title, modalBody,modalFooter, closeOnTouchOutside }) => {
    return (
        <Modal visible={modalVisible} transparent style={{ justifyContent: 'center', alignItems: "center" }}>
            <Text>AppModal</Text>
            <Text style={{ color: colors.white }}>AppModal</Text>

            <TouchableOpacity style={styles.modalWrapper} omPress={() => setModalVisible(true)}>
                <View style={styles.modalView}>
                    <ScrollView scrollEnabled={false}>
                        <View style={styles.modalHeaer}>
                            <Text>{title || 'RNContacts'}</Text>
                            <Icon type="evil" name="close" size={27} />

                            <View />
                            <View />
                            <View />
                            <View />
                            <View />
                            <View />
                        </View>
                        <View style={styles.footerSeparator} />

                        <View style={styles.modalBody}>{modalFooter}</View>
                        {modalFooter}

                        {!modalFooter && (
                            <View>
                                <>
                                    <View style={styles.footerSeparator} />
                                    <View style={styles.footerItems}>
                                        <View style={styles.footer}>
                                            <Text style={styles.footerText}>Privacy Policy</Text>
                                            <View style={styles.termsView} />
                                            <Text style={styles.footerText}>Terms of Service</Text>
                                        </View>
                                    </View>
                                </>
                            </View>
                        )}
                        <ReuseableButton title="Open Modal" danger onPress={() => setModalVisible(prev => !prev)} />
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

// export default AppModal

const styles = StyleSheet.create({
    modalWrapper: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        justifyContent: 'center'
    },
    modalView: {
        backgroundColor: colors.white,
        minHeight: 300,
        marginHorizontal: 20,
        borderRadius: 4
    },
    modalHeaer: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    title: {
        fontSize: 21,
    },

    modalBody: {
        minHeight: 300,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    modalFooter: {
        justifyContent: 'space-evenly',
        paddingVertical: 7,
        alignItems: 'center',
        flexDirection: 'row',
    },

    termsView: {
        width: 5,
        height: 5,
        borderRadius: 100,
        backgroundColor: colors.grey,
    },

    footerSeparator: {
        height: 0.5,
        backgroundColor: colors.grey,
    },

    footerItems: {
        width: '100%',
        padding: 10,
    },

    footerText: {
        fontSize: 12,
    },
})
