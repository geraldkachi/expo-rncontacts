import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../../assets/theme/colors';

const Message = ({ message, primary, info, danger, success, retry, retryFn, onDismiss }) => {

    const getBgColor = () => {
    if (primary) {
        return colors.primary;
      }
      if (danger) {
        return colors.danger;
      }
      if (success) {
        return colors.success;
      }
  
      if (info) {
        return colors.secondary;
      }
    };

    return (
        <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: getBgColor() }]}>
            <View style={styles.loadingIndicator}>
                <Text style={{color: colors.white}}>{message}</Text>

                {retry && !typeof onDismiss === "function" && (
                    <TouchableOpacity onPress={retryFn}>
                        <Text style={{color: colors.white}}>Retry</Text>
                    </TouchableOpacity>
                )}

                {typeof onDismiss === "function" && (
                <TouchableOpacity onPress={()=>true}>
                    <Text style={{color: colors.white}}>X</Text>
                </TouchableOpacity>
                )}
            </View>
        </TouchableOpacity>
    )
}

export default Message

const styles = StyleSheet.create({
    buttonContainer: {
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.success,
        height: 42,
        borderRadius:4,
        marginVertical: 5,
        paddingHorizontal: 5
    },
    title: {},
    loadingIndicator:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
})
