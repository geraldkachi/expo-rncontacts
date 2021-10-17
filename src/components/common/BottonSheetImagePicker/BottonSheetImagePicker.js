import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../../../assets/theme/colors";
import ImageCropPicker from 'react-native-image-crop-picker';
import { Icon } from "../Icon";


export const BottonSheetImagePicker = React.forwardRef(({ onFileSelected }, ref) => {
    const options = [
        {
            name: "Take from camera",
            icon: <Icon name="camera" color={colors.grey} size={21} />,
            onPress: () => {
                ImageCropPicker.openCamera({
                    width: 300, 
                    height: 300,
                    cropping: true,
                    freeStyleCropEnabled: true,
                })
                .then((image) => {
                    onFileSelected(image)
                })
                .catch(err => console.log(err))
            }
        },
        {
          name: 'Choose from Gallery',
          icon: <Icon name="image" color={colors.grey} size={21} />,
          onPress: () => {
            ImageCropPicker.openPicker({
              width: 300,
              height: 300,
              cropping: true,
              freeStyleCropEnabled: true,
            })
              .then((images) => {
                onFileSelected(images);
              })
              .catch(err => console.log(err))
          },
        },
    ]

  return (
    <RBSheet
    //   ref={refRBSheet}
      ref={ref}
      height={190}
      openDuration={250}
      closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        // wrapper: { backgroundColor: "transparent",},
        draggableIcon: {
          backgroundColor: "#000",
        },
      }}
    >
       <View style={styles.optionsWrapper}>
        {options.map(({name, onPress, icon}) => (
          <TouchableOpacity key={name} style={styles.pickerOption} onPress={onPress}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
  
});

// export default BottonSheetImagePicker;

const styles = StyleSheet.create({
  pickerOption: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },

  optionsWrapper: {
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 17,
    paddingLeft: 17,
  },
});
