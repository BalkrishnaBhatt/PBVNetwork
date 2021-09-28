import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import {SplashLogo} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import {NAVIGATION} from '../../../constant';

const screen_width = Dimensions.get('window').width;

const Splash = ({navigation, route}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [isReminderOn, setIsReminderOn] = useState(false);
  const [isVisibleTheme, setIsVisibleTheme] = useState(false);
  const [themeList, setThemeList] = useState([
    {name: 'System', id: 1},
    {name: 'Light', id: 2},
    {name: 'Dark', id: 3},
  ]);
  useEffect(async () => {
    // let reminder_time = await AsyncStorage.getItem(VARIABLE.REMINDER_TIME);
    // let is_reminder_on = await AsyncStorage.getItem(VARIABLE.IS_REMINDER_ON);
    // if (reminder_time == null) {
    //   await AsyncStorage.setItem(VARIABLE.REMINDER_TIME, '00:00');
    // } else {
    //   setReminderTime(reminder_time);
    // }
    // if (is_reminder_on == 'true') {
    //   setIsReminderOn(true);
    // } else if (is_reminder_on == 'false') {
    //   setIsReminderOn(false);
    // }
    setTimeout(async () => {
      // this.props.navigation.navigate(NAVIGATION.HOME);
      navigation.navigate(NAVIGATION.LOGIN);
    }, 1000);
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
