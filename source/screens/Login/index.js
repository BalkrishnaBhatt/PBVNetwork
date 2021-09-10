import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useContext,
  useRef,
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  AppState,
  Modal,
  Platform,
  ImageBackground,
  Alert,
  ToastAndroid,
  Switch,
  Share,
} from 'react-native';
import Common_styles from '../../utils/commonStyle';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import CustomTextInput from '../../components/CustomTextInput';
import {
  LoginTopCurve,
  LoginBottomCurve,
  NextRoundArrowSymbol,
} from '../../utils/svg';
import Images from '../../utils/images';
import {Colors} from '../../utils/colors';
import {console_log} from '../../utils/loggers';
import Styles from './style';
import {NAVIGATION} from '../../constant';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Login = ({navigation, route}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
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
  }, []);
  // const password_ref = useRef(null);
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          // height: screen_height,
          // width: screen_width,
        }}>
        <View style={{flex: 1, marginHorizontal: -15}}>
          <LoginTopCurve
            style={{
              flex: 1,
              marginHorizontal: 0,
              width: screen_width,
            }}></LoginTopCurve>
        </View>
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            Login To<Text style={{color: Colors.primary_color}}> Account</Text>
          </Text>
          <CustomTextInput
            label={'Email or Username'}
            placeholder={'info@example.com'}
            value={emailId}
            onChangeText={text => {
              setEmailId(text);
            }}
            keyboardType={'email-address'}
            // onSubmit={() => password_ref.current?.focus()}
          />
          <CustomTextInput
            // ref={password_ref}
            label={'Password'}
            placeholder={'Password'}
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            secureTextEntry={true}
          />
          <Text
            style={{color: Colors.grey, fontSize: 12, alignSelf: 'flex-end'}}>
            Forget Password
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate(NAVIGATION.DASHBOARD);
            }}
            style={{
              height: 50,
              width: 50,
              alignSelf: 'center',
              marginTop: 30,
            }}>
            <NextRoundArrowSymbol></NextRoundArrowSymbol>
          </TouchableOpacity>
        </View>
        <View style={Common_styles.Flex_1}>
          <LoginBottomCurve></LoginBottomCurve>
        </View>
      </View>
    </>
  );
};
export default Login;
