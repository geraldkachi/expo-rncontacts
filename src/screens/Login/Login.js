import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Container from '../../components/common/Container/Container'
import Input from '../../components/common/Input/Input'
import ReuseableButton from '../../components/common/ReuseableButton/ReuseableButton'

const Login = () => {

    const [value, onChangeText] = useState('')

    return (
        <Container>
            <Input label="Username"
            onChangeText={(text) => onChangeText(text)}
            value={value} 
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            error={"This field is required"}
             />
             
            <Input label="Password"
            onChangeText={(text) => onChangeText(text)}
            value={value} 
            icon={<Text>HIDE</Text>}
            iconPosition="left"
             />
             <ReuseableButton title="Submit" loading={true} disabled={true} />
        </Container>
    )
}

export default Login

const styles = StyleSheet.create({})
