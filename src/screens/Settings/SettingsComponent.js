import React from 'react'
import {  StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../assets/theme/colors';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AppModal, Icon, ReuseableButton } from '../../components/common';

const SettingsComponent = ({ settingsOptions, modalVisible, setModalVisible, prefArr }) => {
    
const saveSetting = (key, value) => {
    AsyncStorage.setItem(key, value);
};

    const modalBodyData = () => (
        <>
            {prefArr.map(({name, selected, onPress}) => (
                <View key={name}>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', paddingVertical:5}} onPress={onPress}>
                        {selected && <Icon name="checked" type="material" size={17} />}
                        <Text style={styles.bodytitle}>{name}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </>
    )

    return (
        <>
        <ReuseableButton title="Open Modal" secondary onPress={() => setModalVisible(true)} />
        <AppModal {...{ modalVisible }} {...{ setModalVisible }}
            title="Sort By"
            modalBody={modalBodyData}
            modalFooter={<></>}
            closeOnTouchOutside={false} />
        <ScrollView style={{backgroundColor: colors.white}} scrollEnabled={false}>
                {settingsOptions.map(({title, subTitle, onPress}) => (
                    <TouchableOpacity key={title} onPress={onPress}>
                        <View style={styles.body}>
                            <Text style={styles.title}>{title}</Text>
                            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                        </View>
                        <View style={styles.line} />
                    </TouchableOpacity>
                ))}
        </ScrollView>
        </>
    )
}

export default SettingsComponent

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 20,
        paddingBottom:20,
        paddingTop: 20
    },
    title: {fontSize: 17},
    subTitle:{
        fontSize: 14,
        color: colors.grey,
        paddingTop: 5
    },
    line:{
        height: 0.5, backgroundColor: colors.grey
    },
    bodytitle:{
        fontSize:17, paddingLeft: 15
    }
})
