import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-reanimated'
import colors from '../../../assets/theme/colors'

const ReuseableButton = ({title, loading, disabled, primary, danger, secondary, onPress }) => {

    const getBgColor = () => {
        if (disabled) {
            return colors.grey
        }
        if (primary) {
            return colors.primary
        }
        if (danger) {
            return colors.danger
        } 
        if(secondary) {
            return colors.secondary
        }
    }
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.buttonContainer, {backgroundColor: getBgColor()}]}>
            <View style={styles.loadingIndicator}>
            {loading && <ActivityIndicator color={ primary ? colors.secondary : colors.primary } />}
            {title && <Text style={[styles.title, {color: disabled ? colors.black : colors.white, paddingLeft: loading ? 5 : 0}]}>{title}</Text>}
            </View>
        </TouchableOpacity>
    )
}

export default ReuseableButton

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor: colors.success,
        height: 42,
        borderRadius:4,
        marginVertical: 5,
        paddingHorizontal: 5
    },
    title: {},
    loadingIndicator:{
        flexDirection:'row'
    },
})
