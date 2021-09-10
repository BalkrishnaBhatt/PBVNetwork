import React, {useEffect, useLayoutEffect, useState, useContext} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

const CustomSafeAreaView = ({backgroundColor, barStyle}) => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: backgroundColor,
        }}
      />
      <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
    </>
  );
};
export default CustomSafeAreaView;
