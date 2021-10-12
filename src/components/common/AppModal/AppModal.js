import React from 'react'
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from '../Icon'
import { ReuseableButton } from '../ReuseableButton'
import colors from '../../../assets/theme/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export const AppModal = ({
    modalVisible,
    setModalVisible,
    title,
    modalBody,
    modalFooter,
    closeOnTouchOutside }) => {
    return (
        <Modal visible={modalVisible} transparent style={{ justifyContent: 'center', alignItems: "center" }}>
            <TouchableWithoutFeedback onPress={() => closeOnTouchOutside && setModalVisible(false)}>

                <View style={styles.modalWrapper}>
                    <View style={styles.modalView}>
                        <ScrollView scrollEnabled={false}>
                            <View style={styles.modalHeaer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ flex: 1 }}>{title || 'RNContacts'}</Text>
                                    <Icon type="evil" name="close" size={27} onPress={() => setModalVisible(prev => !prev)} />
                                </View>

                                <View />
                                <View />
                                <View />
                                <View />
                                <View />
                                <View />
                            </View>
                            <View style={styles.footerSeparator} />

                            <View style={styles.modalBody}>{modalBody}</View>
                            {modalFooter}

                            {!modalFooter && (
                                <View>
                                    <>
                                        <View style={styles.footerSeparator} />
                                        <View style={styles.footerItems}>
                                            <View style={styles.modalFooter}>
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
                </View>
            </TouchableWithoutFeedback>
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 7,
        alignItems: 'center',
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
