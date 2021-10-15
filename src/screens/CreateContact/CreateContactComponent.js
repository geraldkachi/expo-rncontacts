import React, { useState } from 'react'

import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native'
import { Container, Input, ReuseableButton } from '../../components/common'
import CountryPicker from "react-native-country-picker-modal"
import { DEFAULT_IMAGE_URI } from '../../constants'
import colors from '../../assets/theme/colors'

const CreateContactComponent = ({ onChangeText, form, setForm, onSubmit, loading, error, toggleValueChange, openSheet }) => {
    console.log(error, "error: >>>")
    console.log(loading, "loading: >>>")

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Container>
                <Image width={50} height={50} source={{ uri: DEFAULT_IMAGE_URI }} style={styles.imageView} />
                <TouchableOpacity onPress={openSheet}>
                    <Text style={styles.chooseText}>Choose Image</Text>
                </TouchableOpacity>
                <Input value={form.firstName || ''} onChangeText={(value) => onChangeText({ name: "firstName", value })} label="First Name" placeholder="Enter First Name" error={error?.first_name?.[0]} />
                <Input value={form.lastName || ''} onChangeText={(value) => onChangeText({ name: "lastName", value })} label="Last Name" placeholder="Enter Last Name" error={error?.last_name?.[0]} />
                <Input value={form.phoneNumber || ''} onChangeText={(value) => onChangeText({ name: "phoneNumber", value })} icon={
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
                }
                    label="Phone Number"
                    style={{ paddingLeft: 10 }}
                    iconPosition={'left'}
                    error={error?.phone_number?.[0]}
                    placeholder="Phone Number" />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, }}>
                    <Text style={{ fontSize: 17 }}>Add to favorites</Text>

                    <Switch
                        trackColor={{ false: 'blue', true: colors.primary }}
                        thumbColor="#FFFFFF"            // thumbColor={form.isFavorite ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleValueChange}
                        value={form.isFavorite}
                    // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    />
                </View>

                <ReuseableButton title="Submit" primary
                    loading={loading}
                    disabled={loading}
                    onPress={onSubmit} />

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
