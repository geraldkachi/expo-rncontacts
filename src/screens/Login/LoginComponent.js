import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../assets/theme/colors'
import Container from '../../components/common/Container'
import Input from '../../components/common'
import ReuseableButton from '../../components/common/ReuseableButton/ReuseableButton'
import { REGISTER } from '../../constants'
import Message from '../../components/common/Message'

 const LoginComponent = () => {
    const [value, onChangeText] = useState('')
    const { navigate } = useNavigation()

    return (
        <Container>
            <Image style={styles.logoImage} height={70} width={70} source={require('../../assets/images/logo.png')} />

            <View>
                <Text style={styles.welcome}>Welcome to RNContacts</Text>
                <Text style={styles.title}>Please Login Here</Text>

                <Message retry retryFn={() => console.log("222", hey)} onDismiss={()=>true} primary message="invalid Crediential" />
                <Message info message="invalid Crediential" />
                <Message danger message="invalid Crediential" />
                <Message success message="invalid Crediential" />
                <View style={StyleSheet.loginform}>

                    <Input label="Username"
                        placeholder="Enter Username"
                        onChangeText={(text) => onChangeText(text)}
                        value={value}
                    // error={"This field is required"}
                    />

                    <Input label="Password"
                        placeholder="Enter Password"
                        onChangeText={(text) => onChangeText(text)}
                        value={value}
                        secureTextEntry={true}
                        icon={<Text>HIDE</Text>}
                        iconPosition="right"
                    />
                    <ReuseableButton title="Submit" primary />

                    <View style={styles.register}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity onPress={()=> navigate(REGISTER)}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default LoginComponent


const styles = StyleSheet.create({
    loginform: {
        paddingTop: 10 
    },
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 50
    },
    welcome: {
        fontSize: 21,
        textAlign: 'center',
        fontWeight: '500'
    },
    title: {
        textAlign: 'center',
        fontWeight: '500'
    },
    register:{
        flexDirection:'row',
        marginTop: 15
    },
    infoText: {
        fontSize:17
    },
    linkBtn: {
        paddingLeft:17,
        color: colors.primary,
        fontSize: 16,
    }
})
