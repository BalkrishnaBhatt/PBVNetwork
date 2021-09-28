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
import {
  HomeTabSymbol,
  NewsTabSymbol,
  MemberTabSymbol,
  ChartTabSymbol,
  ManageTabSymbol,
  PowerButtonSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Fonts} from '../../../utils/fonts';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const General = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);
  const [accountEmail, setAccountEmail] = useState(
    'dipendra.pancholi@gmail.com',
  );
  const [changePassword, setChangePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
        <View style={Styles.view_field_main}>
          <Text style={Styles.text_field_title}>Account Email</Text>
          <TextInput
            placeholder="Account Email"
            style={Styles.textinput_field}
            value={accountEmail}
            onChangeText={value => setAccountEmail(value)}
          />
        </View>
        <View style={Styles.view_field_main}>
          <Text style={Styles.text_field_title}>
            Change Password (leave blank for no change)
          </Text>
          <TextInput
            placeholder="New Password"
            style={Styles.textinput_field}
            value={changePassword}
            secureTextEntry={true}
            onChangeText={value => setChangePassword(value)}
          />
        </View>
        <View style={[Styles.view_field_main, {borderBottomWidth: 0}]}>
          <Text style={Styles.text_field_title}>Repeat New Password</Text>
          <TextInput
            placeholder="Repeat New Password"
            style={Styles.textinput_field}
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={value => setConfirmPassword(value)}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            // navigation.navigate(label);
            ToastAndroid.show('Changes Saved successfully', ToastAndroid.SHORT);
          }}
          style={Styles.view_save_changes}>
          <Text style={Styles.text_save_changes}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default General;
