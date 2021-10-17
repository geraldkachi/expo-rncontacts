import React from 'react'
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Container, Icon } from '../../components/common'
import { SETTINGS } from '../../constants';
import logoutUser from '../../context/actions/auth/logoutUser';

const SideMenu = ({ navigation, authDispatch }) => {

    const handleLogout = () => {
        navigation.toggleDrawer();
        Alert.alert('Logout!', 'Are you sure you want to logout?', [
          {
            text: 'Cancel',
            onPress: () => {},
          },    
          {
            text: 'OK',
            onPress: () => {
              logoutUser()(authDispatch);
            },
          },
        ]);
      };
    
      const menuItems = [
        {
          icon: <Icon type="fontisto" size={17} name="player-settings" />,
          name: 'Settings',
          onPress: () => navigation.navigate(SETTINGS)    
        },
        {
          icon: <Icon type="material" size={17} name="logout" />,
          name: 'Logout',
          onPress: handleLogout,
        },
      ];

    return (
        <SafeAreaView>
            <Container>
                <Image
                    height={70}
                    width={70}
                    source={require('../../assets/images/logo.png')}
                    style={styles.logoImage} />

                <View style={{ paddingHorizontal: 30 }}>
                    {menuItems.map(({ name, icon, onPress }) => (
                        <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
                            <View style={styles.icon}>{icon}</View>
                            <Text style={styles.itemText}>{name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Container>
        </SafeAreaView>
    )
}

export default SideMenu

const styles = StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        // alignSelf: 'center',
        marginTop: 50,
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemText: {
        fontSize: 17,
        paddingVertical: 7,
        paddingLeft: 20,
    },
    icon: {}
})
