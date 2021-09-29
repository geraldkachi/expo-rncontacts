import React from 'react'
import { ScrollView, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export const Container = ({ children }) => {
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

const styles = StyleSheet.create({
    wrapper:{
        padding: 20
    }
 })

// export default Container
