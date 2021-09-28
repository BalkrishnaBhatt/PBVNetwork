import React, {useEffect, useLayoutEffect, useState, useContext} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  Modal,
} from 'react-native';
import Styles from './style';
import {Colors} from '../../utils/colors';
import {CrownModalSymbol, CrownSymbol} from '../../utils/svg';
import ImagePicker from 'react-native-image-crop-picker';
import {Fonts} from '../../utils/fonts';
const ImagePickerComponent = ({
  navigation,
  route,
  isVisible,
  onClose,
  onSelect,
}) => {
  const [planSelected, setPlanSelected] = useState(2);
  const openCamera = () => {
    ImagePicker.openCamera({
      // width: 300,
      // height: 400,
      // cropping: true,
    }).then(image => {
      // console.log(image);
      onClose();
      onSelect(image.path);
    });
  };
  const openGalary = () => {
    ImagePicker.openPicker({
      // width: 300,
      // height: 400,
      // cropping: true,
    }).then(image => {
      // console.log(image);
      onClose();
      onSelect(image.path);
    });
  };
  return (
    <>
      <Modal
        // animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          onClose();
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            onClose();
          }}
          style={Styles.view_main_modal}>
          <TouchableOpacity activeOpacity={1} style={Styles.modal_white_back}>
            <Text style={Styles.text_option} onPress={() => openCamera()}>
              Open Camera
            </Text>
            <Text style={Styles.text_option} onPress={() => openGalary()}>
              Open Galary
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
export default ImagePickerComponent;
