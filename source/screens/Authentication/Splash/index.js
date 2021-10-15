import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import {SplashLogo} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import {NAVIGATION, VARIABLE} from '../../../constant';
import {useSelector, useDispatch} from 'react-redux';
import {loginSave, setLoader} from '../../../redux/actions';
import axiosInstance from '../../../axios';
import {console_log} from '../../../utils/loggers';

import AsyncStorage from '@react-native-async-storage/async-storage';
const screen_width = Dimensions.get('window').width;

const Splash = ({navigation, route}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const dispatch = useDispatch();
  // const [isReminderOn, setIsReminderOn] = useState(false);
  // const [isVisibleTheme, setIsVisibleTheme] = useState(false);
  // const [themeList, setThemeList] = useState([
  //   {name: 'System', id: 1},
  //   {name: 'Light', id: 2},
  //   {name: 'Dark', id: 3},
  // ]);
  useEffect(async () => {
    await AsyncStorage.getItem(VARIABLE.USER_INFO).then(async response => {
      // console.log('response: ', response);
      if (response != null) {
        dispatch(loginSave(JSON.parse(response)));
        // console.log('JSON.parse(response): ', JSON.parse(response));
        setTimeout(() => {
          navigation.replace(NAVIGATION.DASHBOARD);
        }, 500);
        // let userInfo = JSON.parse(response);
        // let token = userInfo.token;
        // this.getData(token);
      } else {
        setTimeout(() => {
          navigation.replace(NAVIGATION.LOGIN);
        }, 500);
      }
    });
    // setTimeout(async () => {
    //   // this.props.navigation.navigate(NAVIGATION.HOME);
    //   navigation.navigate(NAVIGATION.LOGIN);
    // }, 1000);
  }, []);
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View style={{backgroundColor: Colors.black, flex: 1}}>
        <SplashLogo></SplashLogo>
      </View>
    </>
  );
};
export default Splash;
