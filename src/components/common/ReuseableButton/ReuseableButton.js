import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ReuseableButton = ({title, loading, disabled, ...props}) => {
    return (
        <TouchableOpacity onPress={() =>{}}>
            {title && <Text style={styles.title}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default ReuseableButton

const styles = StyleSheet.create({
    title: {}
})
