import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {Fonts} from '../../utils/fonts';
import {CloseSymbol} from '../../utils/svg';
import {Colors} from '../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../constant';

const screen_height = Dimensions.get('window').height;
const CustomDrawer = ({...props}) => {
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
        padding: 20,
        backgroundColor: Colors.white,
        height: screen_height,
      }}>
      <SafeAreaView></SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          //  props.navigation.dispatch(DrawerActions.closeDrawer())
          // DrawerActions.closeDrawer()
          // navigation.closeDrawer()
        }}
        activeOpacity={0.8}
        style={{
          backgroundColor: '#F5F5F5',
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-end',
        }}>
        <CloseSymbol style={{height: 15, width: 15}}></CloseSymbol>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.view_button}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate(NAVIGATION.HOME)}>
        <Text style={Styles.text_button}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.view_button}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate(NAVIGATION.GROUPS_ROUTER)}>
        <Text style={Styles.text_button}>Groups</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.view_button}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate(NAVIGATION.MEMBERS)}>
        <Text style={Styles.text_button}>Members</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.view_button}
        activeOpacity={0.8}
        onPress={() =>
          props.navigation.navigate(NAVIGATION.CREATE_OPPORTUNITY)
        }>
        <Text style={Styles.text_button}>Create Opportunity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.view_button}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate(NAVIGATION.FAQS)}>
        <Text style={Styles.text_button}>FAQS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.view_button}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate(NAVIGATION.CONTACT)}>
        <Text style={Styles.text_button}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Styles.view_button, {borderBottomWidth: 0}]}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate(NAVIGATION.SETTINGS)}>
        <Text style={Styles.text_button}>Setting</Text>
      </TouchableOpacity>
      <View style={{flex: 1}}></View>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 14,
          color: Colors.primary_color,
        }}
        onPress={() =>
          props.navigation.navigate(NAVIGATION.TERM_AND_CONDITION)
        }>
        Term & Condition
      </Text>
    </View>
  );
};

export default CustomDrawer;
