import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import {CheckedSymbol, EditSymbol, UncheckedSymbol} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Fonts} from '../../../utils/fonts';
import Common_styles from '../../../utils/commonStyle';
import ImagePickerComponent from '../../../components/ImagePickerComponent';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const NotificationList = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);
  const [groupName, setGroupName] = useState('');

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  // const backAction = () => {
  //   navigation.navigate(NAVIGATION.GROUP_DETAIL);
  // };
  return (
    <>
      <View style={Styles.View_Main}>
        <View
          style={{
            backgroundColor: Colors.light_primary_color,
            borderColor: Colors.primary_color,
            borderRadius: 15,
            padding: 15,
            margin: 10,
            borderWidth: 1,
          }}>
          <Text style={{fontSize: 14, fontFamily: Fonts.Regular_font}}>
            You have no {route.params.unread ? 'Unread' : ''} Notification
          </Text>
        </View>
      </View>
    </>
  );
};
export default NotificationList;
