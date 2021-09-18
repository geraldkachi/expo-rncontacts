import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../assets/theme/colors'
import Container from '../../components/common/Container/Container'
import Input from '../../components/common/Input'
import ReuseableButton from '../../components/common/ReuseableButton/ReuseableButton'
import envs from "../../config"

// DEV_BACKEND_URL
console.log("BACKEND_URl", envs)
console.log("__DEV__", __DEV__)


const RegisterComponent = ({ form, errors, onChange, onSubmit}) => {
    // const [value, onChangeText] = useState('')
    const { navigate } = useNavigation()

    return (
        <Container>
            <Image style={styles.logoImage} height={70} width={70} source={require('../../assets/images/logo.png')} /> 

            <View>
                <Text style={styles.welcome}>Welcome to RNContacts</Text>
                <Text style={styles.title}> Create a free Account</Text>
                <View style={StyleSheet.loginform}>

                    <Input label="Username"
                        placeholder="Enter Username"
                        // onChangeText={(text) => onChangeText(text)}
                        onChangeText={(value) => {
                            onChange({name: "userName", value})
                        }}                        
                        error={"This field is required"}
                    />
                    <Input label="First Name"
                        placeholder="Enter Firstname"
                        onChangeText={(value) => {
                            onChange({name: "firstName", value})
                        }}                        
                        error={errors.firstName}
                    />
                    <Input label="Last Name"
                        placeholder="Enter Lastname"
                        onChangeText={(value) => {
                            onChange({name: "lastName", value})
                        }}        
                        error={errors.lastName}                
                    />
                    <Input label="Email"
                        placeholder="Enter Email"
                        error={errors.firstName}
                        onChangeText={(value) => {
                            onChange({name: "email", value})
                        }}                        
                    />

                    <Input label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        icon={<Text>HIDE</Text>}
                        iconPosition="right"
                        onChangeText={(value) => {
                            onChange({name: "password", value})
                        }}                        
                        error={errors.password}  
                    />
                    <ReuseableButton onPress={onSubmit} title="Submit" primary />

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

export default RegisterComponent


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