import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Image, ActivityIndicator} from 'react-native';
import {Colors} from '../../utils/colors';
import images from '../../utils/images';
const CustomLoader = props => {
  const {visible} = props;

  // useEffect(async () => {
  //   // console.log('loader called : ');
  // }, []);
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.black_opacity_25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size={'large'} color={Colors.ActivityIndicator} />
      </View>
    </Modal>
  );
};

export default CustomLoader;
