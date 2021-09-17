import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './style'

const Container = ({ children }) => {
    return (
        <ScrollView>
            <View style={styles.wrapper}>
                {children}
            </View>
        </ScrollView>
    )
}

export default Container
