import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { color } from 'react-native-reanimated'
import colors from '../../../assets/theme/colors'

const Input = ({ value, onChangeText, label, style, icon, iconPosition, error, ...props }) => {

    const [focused, setFocused] = useState(false)


    const getFlexDirection = () => {

        if (icon && iconPosition) {
            if (iconPosition === "right") {
                return "row"
            } else if (iconPosition === 'left') {
                return "row-reverse"
            }
        }
    }

    const getBorderColor = () => {
        if (focused) {
            return colors.primary
        }
        if (error) {
            return colors.danger
        } else {
            return colors.grey
        }
    }
    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.inputwrapper,{alignItems: icon ? "center": 'baseline'}, { flexDirection: getFlexDirection(), borderColor: getBorderColor() }]}>
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                    error={"This field is required"}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(true)}
                    {...props}
                />
                <View>{icon && icon}</View>
            </View>
            {error && <Text style={styles.error}>{error}</Text>}

        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: { paddingVertical: 12 },
    inputwrapper: {
        // flexDirection: "row",
        // borderColor: colors.grey,
        // alignItems: 'center',
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,
        marginTop: 5
    },
    textInput: {
        flex: 1,
        // backgroundColor: colors.success,
        width:'100%'
    },
    error: {
        color: colors.danger,
        paddingTop: 5,
        fontSize: 12
    }
})
