import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './style'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const Container = ({ children }) => {
    return (
        <ScrollView>
            <KeyboardAwareScrollView scrollEnabled={false}>
                <View style={styles.wrapper}>
                    {children}
                </View>
            </KeyboardAwareScrollView>
        </ScrollView>
    )
}

export default Container
