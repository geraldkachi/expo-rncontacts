// import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../assets/theme/colors'
import Container from '../../components/common/Container'
import Input from '../../components/common'
import ReuseableButton from '../../components/common/ReuseableButton/ReuseableButton'
import { REGISTER } from '../../constants'
import Message from '../../components/common/Message'

 const LoginComponent = ({ form, error, onSubmit, onChange, navigation, loading, justSignedUp}) => {
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    return (
        <Container>
            <Image style={styles.logoImage} height={70} width={70} source={require('../../assets/images/logo.png')} />

            <View>
                <Text style={styles.welcome}>Welcome to RNContacts</Text>
                <Text style={styles.title}>Please Login Here</Text>

                <View style={styles.loginform}>
                    {justSignedUp && (<Message onDismiss={() => {}} success message="Account created successfully" />)}
                    {error && !error.error && ( <Message onDismiss={() => {}} danger message="invalid credentials" />)}
                    {error?.error && <Message danger onDismiss message={error?.error} />}

                    <Input label="Username"
                        placeholder="Enter Username"
                        // onChangeText={(text) => onChangeText(text)}
                        onChangeText={(value) => {
                            onChange({name: "userName", value})
                        }}
                        value={form.userName}
                        // error={error?.username?.[0]}
                    />

                    <Input label="Password"
                        placeholder="Enter Password"
                        onChangeText={(value) => {
                            onChange({name: "password", value})
                        }}                        
                        secureTextEntry={isSecureEntry}
                        onSubmitEditing={()=> onSubmit()}
                        icon={
                            <TouchableOpacity
                              onPress={() => {
                                setIsSecureEntry((prev) => !prev);
                              }}>
                              <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                            </TouchableOpacity>
                          }
                        iconPosition="right"
                        value={form.password}
                    />
                    <ReuseableButton disabled={loading} loading={loading} onPress={onSubmit} title="Submit" primary />

                    <View style={styles.register}> 
                    <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate(REGISTER)}>
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
