import { useNavigation } from '@react-navigation/core'
import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import colors from '../../assets/theme/colors'
import { AppModal, Icon, Message, ReuseableButton } from '../../components/common'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { CONTACT_DETAIL, CREATE_CONTACT } from '../../constants'
import { ScaledSheet } from 'react-native-size-matters'


const ContactComponent = ({ sortBy, modalVisible, setModalVisible, loading, data }) => {

    const { navigate } = useNavigation();
    const swipeableItemRefs = useRef([]);

    // console.log('swipeableItemRefs', swipeableItemRefs);

    const toggleSwipeable = (key) => {
        swipeableItemRefs.current.forEach((ref, i) => {
            if (ref.id !== key) {
                swipeableItemRefs.current?.[i]?.swipeable?.close();
            }
        });
    };

    const ListEmptyComponent = () => {
        return (
            <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                <Message info message="No contactsto show" />
            </View>
        )
    }

    const RenderItem = ({ item }) => {
        console.log("item i need you nowwwwwwwwwwwwwwwwwww", item)
        const { contact_picture, first_name, last_name, phone_number, country_code } = item
        console.log(contact_picture, "contact_picture")
        return (
            <Swipeable
                ref={(ref) => swipeableItemRefs.current.push({
                    id,
                    swipeable: ref,
                })}
                onSwipeableWillOpen={() => toggleSwipeable(id)}
                renderLeftActions={(progress, dragX) => renderLeftActions(progress, dragX, item)}
                renderRightActions={(progress, dragX) => renderLeftActions(progress, dragX, item)}>
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => {
                        navigate(CONTACT_DETAIL, { item });
                    }}>
                    <View style={styles.item}>
                        {contact_picture ? (
                            <Image
                                style={{ width: 45, height: 45, borderRadius: 100 }}
                                source={{ uri: contact_picture }}
                            />
                        ) : (
                            <View
                                style={styles.contact_picture}>
                                <Text style={[styles.name, { color: colors.white }]}>
                                    {first_name[0]}
                                </Text>
                                <Text style={[styles.name, { color: colors.white }]}>
                                    {last_name[0]}
                                </Text>
                            </View>
                        )}

                        <View style={{ paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.name}>{first_name}</Text>

                                <Text style={styles.name}> {last_name}</Text>
                            </View>
                            <Text style={styles.phoneNumber}>{`${country_code} ${phone_number}`}</Text>
                        </View>
                    </View>

                    <Icon name="right" type="ant" size={18} color={colors.grey} />
                </TouchableOpacity>
            </Swipeable>
        );
    }

    const dataSortBy = () => (
        sortBy ? data.sort((a, b) => {

            // const sortByFirst = sortBy === 'First Name' ? -1 : 1
            // const sortByLast =  sortBy === 'Last Name' ? -1 : 1
            if (sortBy === 'First Name') {
                if (b.first_name > a.first_name) {
                    return -1;
                } else {
                    return 1;
                }
            }
            if (sortBy === 'Last Name') {
                if (b.last_name > a.last_name) {
                    return -1;
                } else {
                    return 1;
                }
            }
        })
            : data
    )

    return (
        <>
        {<AppModal {...{modalVisible}} {...{setModalVisible}} />}
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {loading &&
                    <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                        <ActivityIndicator color={colors.primary} size="large" />
                    </View>
                }

                {!loading && (
                    <View style={{ paddingVertical: 20 }}>
                        <FlatList
                            data={dataSortBy()}
                            keyExtractor={(item) => String(item.id)}
                            ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: colors.grey }}></View>}
                            // renderItem={RenderItem}
                            renderItem={({ item }) => <RenderItem item={item} />}
                            ListEmptyComponent={ListEmptyComponent}
                            ListFooterComponent={<View style={{ height: 150 }}></View>}
                        />
                    </View>
                )}

                <ReuseableButton title="Open Modal" danger onPress={() => setModalVisible(prev => !prev)} />
            </View>
            <TouchableOpacity style={styles.floatingActionButton} onPress={() => navigate(CREATE_CONTACT)}>
                <Icon name="plus" size={21} color={colors.white} />
            </TouchableOpacity>
        </>
    )
}

export default ContactComponent

const styles = ScaledSheet.create({
    contact_picture: {
        width: 45,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grey,
        borderRadius: 100
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        alignItems: 'center',
        flexGrow: 1,
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    name: { fontSize: 17 },
    phoneNumber: {
        opacity: 0.6,
        fontSize: 14,
        paddingVertical: 5,
    },

    floatingActionButton: {
        backgroundColor: 'red',
        width: 55,
        height: 55,
        position: 'absolute',
        bottom: 45,
        right: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButton: {
        flexGrow: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
    },

    actionText: {
        textAlign: 'center',
        maxWidth: '70@s',
        paddingTop: '5@s',
        fontSize: '14@s',
        color: colors.white,
    },
    actionTextStyle: {
        padding: '40@s',
    },
})
