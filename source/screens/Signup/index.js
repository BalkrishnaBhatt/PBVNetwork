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
  SignUpBottomCurve,
  SignUpTopCurve,
  NextRoundArrowSymbol,
} from '../../utils/svg';
import Images from '../../utils/images';
import {Colors} from '../../utils/colors';
import {console_log} from '../../utils/loggers';
import Styles from './style';
import {VARIABLE, NAVIGATION} from '../../constant';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Signup = ({navigation, route}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [firmName, setFirmName] = useState('');
  const [userName, setUserName] = useState('');
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
      <View
        style={{
          // backgroundColor: Colors.white,
          flex: 1,
          // height: screen_height,
          // width: screen_width,
          // padding: 10,
        }}>
        <CustomSafeAreaView
          backgroundColor={'#000'}
          barStyle={'light-content'}
        />
        <ScrollView
        // style={{flexGrow: 1}}
        // contentContainerStyle={{flex: 1, paddingBottom: 60}}
        >
          <View>
            <SignUpTopCurve
              style={{
                flex: 1,
                margin: 0,
                marginTop: -60,
                // width: screen_width,
              }}></SignUpTopCurve>
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                Lawyer's
                <Text style={{color: Colors.primary_color}}> Registration</Text>
              </Text>
              <CustomTextInput
                label={'First name'}
                placeholder={'John'}
                value={firstName}
                onChangeText={text => {
                  setFirstName(text);
                }}
                // onSubmit={() => password_ref.current?.focus()}
              />
              <CustomTextInput
                // ref={password_ref}
                label={'Last name'}
                placeholder={'Doe'}
                value={lastName}
                onChangeText={text => {
                  setLastName(text);
                }}
                secureTextEntry={true}
              />
              <CustomTextInput
                label={'Email'}
                placeholder={'info@example.com'}
                value={emailId}
                onChangeText={text => {
                  setEmailId(text);
                }}
                keyboardType={'email-address'}
                // onSubmit={() => password_ref.current?.focus()}
              />
              <CustomTextInput
                label={'Firm name'}
                placeholder={'info@example.com'}
                value={firmName}
                onChangeText={text => {
                  setFirmName(text);
                }}
                // onSubmit={() => password_ref.current?.focus()}
              />
              <CustomTextInput
                label={'Username'}
                placeholder={'info_example'}
                value={userName}
                onChangeText={text => {
                  setUserName(text);
                }}
                // onSubmit={() => password_ref.current?.focus()}
              />
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
            <SignUpBottomCurve></SignUpBottomCurve>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default Signup;
