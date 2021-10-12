import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Container, Input, ReuseableButton } from '../../components/common'
import CountryPicker from "react-native-country-picker-modal"
import { DEFAULT_IMAGE_URI } from '../../constants'
import colors from '../../assets/theme/colors'

const CreateContactComponent = ({ onChangeText, form, setForm, onSubmit }) => {
    return (
        <View style={styles.container}>
            <Container>
                <Image width={50} height={50} source={{ uri: DEFAULT_IMAGE_URI }} style={styles.imageView} />
                <Text style={styles.chooseText}>Choose Image</Text>
                <Input value={form.firstName || ''} onChangeText={(value) => onChangeText({ name: "firstName", value })} label="First Name" placeholder="Enter First Name" />
                <Input value={form.lastName || ''} onChangeText={(value) => onChangeText({ name: "lastName", value })} label="Last Name" placeholder="Enter Last Name" />
                <Input value={form.phoneNumber || ''} onChangeText={(value) => onChangeText({ name: "phoneNumber", value })} style={{ paddingLeft: 10 }} iconPosition={'left'} icon={
                    <CountryPicker
                        withFilter
                        withFlag
                        countryCode={form.countryCode || undefined}
                        withCountryNameButton={false}
                        withCallingCode
                        withCallingCodeButton
                        withEmoji
                        onSelect={(v) => {
                            const phoneCode = v.callingCode[0];
                            const cCode = v.cca2;
                            setForm({ ...form, phoneCode, countryCode: cCode });
                        }}
                    />
                } label="Phone Number" placeholder="Phone Number" />

                <ReuseableButton title="Submit" primary onPress={onSubmit} />
            </Container>
        </View>
    )
}

export default CreateContactComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    imageView: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center'
    },
    chooseText: {
        color: colors.primary,
        textAlign: 'center'
    }
})
