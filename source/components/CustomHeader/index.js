import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {OpenDrawerSymbol} from '../../utils/svg';
import {Colors} from '../../utils/colors';
import {NAVIGATION} from '../../constant';

const CustomHeader = ({
  navigation,
  headerSymbolColor = Colors.black,
  ...props
}) => {
  // const handlePress = () => {
  //   props.navigation.dispatch(DrawerActions.closeDrawer());
  //   props.navigation.navigate("Settings");
  // };
  // const toggleTheme = () => {
  //   setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  // };
  // console.log('navi--?',props.navigation);
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
      }}>
      <TouchableOpacity
        style={{padding: 10}}
        activeOpacity={0.8}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <OpenDrawerSymbol
          style={{height: 25, width: 25}}
          fill={headerSymbolColor}></OpenDrawerSymbol>
      </TouchableOpacity>
      <View style={{flex: 1}}></View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate(NAVIGATION.PROFILE);
        }}>
        <Image
          style={{
            // alignSelf: 'flex-end',
            height: 40,
            width: 40,
            borderRadius: 20,
          }}
          source={{uri: 'https://picsum.photos/200/300'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
