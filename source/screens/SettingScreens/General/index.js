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
import {useSelector, useDispatch} from 'react-redux';
import {loginSave, setLoader} from '../../../redux/actions';
import axiosInstance from '../../../axios';
import {console_log} from '../../../utils/loggers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Store} from '../../../redux/store';

const General = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  const [accountEmail, setAccountEmail] = useState('');
  const [changePassword, setChangePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [changePasswordErrorText, setChangePasswordErrorText] = useState('');
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');
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
  const validate = () => {
    let error_flag = true;
    if (changePassword == '') {
      setChangePasswordErrorText('Please Enter New Password');
      error_flag = false;
    }
    if (confirmPassword == '') {
      setConfirmPasswordErrorText('Please Enter Repeat Password');
      error_flag = false;
    }
    if (confirmPassword !== changePassword) {
      setConfirmPasswordErrorText(
        "Repeat Password doesn't match with New Password",
      );
      error_flag = false;
    }
    if (error_flag) {
      dispatch(setLoader(true));
      UpdateUserPassword();
    }
  };
  const UpdateUserPassword = async () => {
    let url =
      'pbvnetwork/v1/userchangepassword/' +
      Store.getState().AuthenticationReducer.userId;
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    url =
      url +
      '?password=' +
      changePassword +
      '&confirm_password=' +
      confirmPassword;
    // '&job_opportunities=' +
    // jobOpportunities+
    // '&job_opportunities=' +
    // jobOpportunities;
    console_log('UpdateUserPasswordourl', url);
    axiosInstance
      .post(url, {}, config)
      .then(async response => {
        dispatch(setLoader(false));
        console_log(
          'UpdateUserPassword response: ',
          JSON.stringify(response.data, null, 2),
        );
        setChangePassword('');
        setConfirmPassword('');
        // handle success
        // if (response.data.user_id == false) {
        // } else {
        //   await AsyncStorage.setItem(
        //     VARIABLE.USER_INFO,
        //     JSON.stringify(response.data),
        //   );
        //   dispatch(loginSave(response.data));
        //   navigation.navigate(NAVIGATION.DASHBOARD);
        // }
        // ToastAndroid.show('Changes Saved successfully', ToastAndroid.SHORT);
      })
      .catch(function (error) {
        console_log(
          'UpdateUserPassword error',
          JSON.stringify(error.response, null, 2),
        );
        dispatch(setLoader(false));
        let error_code = error.response.data;
        // handle error
        if (error_code == '[jwt_auth] invalid_username') {
          setEmailIdErrorText('Invalid Username');
        } else if (error_code == '[jwt_auth] incorrect_password') {
          setPasswordErrorText('Incorrect Password');
        }
        // console_log('Error of config', error.config);
      });
  };
  return (
    <>
      <View style={Styles.View_Main}>
        <View style={Styles.view_field_main}>
          <Text style={Styles.text_field_title}>Account Email</Text>
          <TextInput
            placeholder="Account Email"
            style={Styles.textinput_field}
            value={accountEmail}
            editable={false}
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
            onChangeText={value => {
              setChangePassword(value);
              setChangePasswordErrorText('');
            }}
          />
          {changePasswordErrorText == '' ? null : (
            <Text
              style={{
                color: Colors.red,
                fontSize: 12,
                fontFamily: Fonts.Regular_font,
                // marginTop: -10,
              }}>
              {changePasswordErrorText}
            </Text>
          )}
        </View>
        <View style={[Styles.view_field_main, {borderBottomWidth: 0}]}>
          <Text style={Styles.text_field_title}>Repeat New Password</Text>
          <TextInput
            placeholder="Repeat New Password"
            style={Styles.textinput_field}
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={value => {
              setConfirmPassword(value);
              setConfirmPasswordErrorText('');
            }}
          />
          {confirmPasswordErrorText == '' ? null : (
            <Text
              style={{
                color: Colors.red,
                fontSize: 12,
                fontFamily: Fonts.Regular_font,
                // marginTop: -10,
              }}>
              {confirmPasswordErrorText}
            </Text>
          )}
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            validate();
          }}
          style={Styles.view_save_changes}>
          <Text style={Styles.text_save_changes}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default General;
