import React from 'react'
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from '../Icon'
import colors from '../../../assets/theme/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import PropTypes from 'prop-types';


export const AppModal = ({
    modalVisible,
    setModalVisible,
    title,
    modalBody,
    modalFooter,
    closeOnTouchOutside }) => {
    return (
        <Modal visible={modalVisible} transparent>
            <TouchableWithoutFeedback style={styles.modalWrapper} onPress={() => closeOnTouchOutside && setModalVisible(false)}>

                    <View style={styles.modalView}>
                        <ScrollView scrollEnabled={false}>
                            <View >
                                <View style={styles.modalHeader}>
                                    <Text style={{ flex: 1 }}>{title || 'RNContacts'}</Text>
                                    <View onPress={()=>setModalVisible(false)}>
                                        <Icon type="evil" name="close" size={27} onPress={() => setModalVisible(prev => !prev)} />
                                    </View>
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
                            {/* <ReuseableButton title="Open Modal" danger onPress={() => setModalVisible(prev => !prev)} /> */}
                        </ScrollView>
                    </View>
                
            </TouchableWithoutFeedback>
        </Modal>
    )
}

AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
  closeOnTouchOutside: true,
};

// export default AppModal

const styles = StyleSheet.create({
    modalWrapper: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        height:'100%'
    },
    modalView: {
        backgroundColor: colors.white,
        minHeight: 300,
        marginHorizontal: 20,
        borderRadius: 4
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: "space-around",
        padding: 15
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


// hegworld3
// 