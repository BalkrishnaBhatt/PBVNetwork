import React, {useEffect, useState, useRef} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  CustomSafeAreaView,
  CustomTextInput,
  CustomLoader,
} from '../../../components';
import {
  LoginTopCurve,
  LoginBottomCurve,
  NextRoundArrowSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import {NAVIGATION, EMAIL_PATTERN, VARIABLE} from '../../../constant';
import {Fonts} from '../../../utils/fonts';
// import GestureRecognizer from 'react-native-swipe-gestures';
import {useDispatch} from 'react-redux';
import {loginSave} from '../../../redux/actions';
import axiosInstance from '../../../axios';
import {console_log} from '../../../utils/loggers';
import AsyncStorage from '@react-native-async-storage/async-storage';
// const screen_width = Dimensions.get('window').width;
// const screen_height = Dimensions.get('window').height;
const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
  // gestureIsClickThreshold: 20,
};
const Login = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  // const [emailId, setEmailId] = useState('pbvnetwork');
  // const [password, setPassword] = useState('Oqy6sCcFYB(UlDQ6%23x');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [emailIdErrorText, setEmailIdErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [screen_width, set_screen_width] = useState(
    Dimensions.get('window').width,
  );
  const [screen_height, set_screen_height] = useState(
    Dimensions.get('window').height,
  );
  useEffect(async () => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      set_screen_width(width);
      set_screen_height(height);
      console_log('device rotaated', width, height);
    });
    return () => Dimensions.removeEventListener();
  }, []);
  const password_ref = useRef(null);

  const validate = () => {
    let error_flag = true;
    if (emailId == '') {
      setEmailIdErrorText('Please Enter Email or Username');
      error_flag = false;
      // } else if (!validateEmail()) {
      //   setEmailIdErrorText('Sorry, your email is invalid.');
      //   error_flag = false;
    }
    if (password == '') {
      setPasswordErrorText('Please Enter Password');
      error_flag = false;
    }
    if (error_flag) {
      // navigation.navigate(NAVIGATION.DASHBOARD);
      setIsLoading(true);
      LoginRequest();
    }
  };
  const LoginRequest = async () => {
    let url =
      'jwt-auth/v1/token' + '?username=' + emailId + '&password=' + password;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axiosInstance
      .post(url, config)
      .then(async response => {
        setIsLoading(false);
        // console_log('login response: ', JSON.stringify(response.data, null, 2));
        // handle success
        if (response.data && response.data.token) {
          navigation.navigate(NAVIGATION.DASHBOARD);
          await AsyncStorage.setItem(
            VARIABLE.USER_INFO,
            JSON.stringify(response.data),
          );
          dispatch(loginSave(response.data));
        }
        // else if (
        //   response.message ==
        //   '<strong>ERROR</strong>: Invalid login credentials.'
        // ) {
        //   setPasswordErrorText('Invalid login credentials.');
        // }
      })
      .catch(function (error) {
        setIsLoading(false);
        console_log(
          'LoginRequest error',
          JSON.stringify(error.response.data, null, 2),
        );
        let error_code = error.response.data.code;
        // handle error
        if (
          error.response.data.message ==
          '<strong>ERROR</strong>: Access from your IP address has been blocked for security reasons. Please contact the administrator.'
        ) {
          setPasswordErrorText(
            'Access from your IP address has been blocked for security reasons. Please contact the administrator.',
          );
        } else if (error_code == '[jwt_auth] invalid_username') {
          setEmailIdErrorText('Invalid Username');
        } else if (error_code == '[jwt_auth] incorrect_password') {
          setPasswordErrorText('Incorrect Password');
        }
        // console_log('Error of config', error.config);
      });
  };
  const validateEmail = () => {
    return EMAIL_PATTERN.test(emailId);
  };
  const onSwipeUp = gestureState => {
    navigation.navigate(NAVIGATION.SIGN_UP);
    console_log('swiped up');
  };
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
        <CustomLoader
          // errorMessage={'LoaderReducer.loading'}
          // visible={LoaderReducer.loading}
          visible={isLoading}
        />
        <ScrollView
          // style={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          bounces={false}
          // contentContainerStyle={{flex: 1, paddingBottom: 60}}
        >
          {/* <View
          style={{flex: 1, marginHorizontal: -15, width: screen_height / 6}}> */}
          <LoginTopCurve
            width={screen_width}
            height={screen_height}
            style={{
              // flex: 1,
              // marginHorizontal: 0,
              // width: screen_width,
              // height: screen_width,
              marginTop: -(screen_height / 2.7),
              // position: 'absolute',
            }}
          />
          {/* </View> */}
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              // marginTop: '60%',
              marginTop: -(screen_height / 3.5),
              zIndex: 2,
              // marginBottom: -50,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                fontFamily: Fonts.Regular_font,
              }}>
              Login To
              <Text style={{color: Colors.primary_color}}> Account</Text>
            </Text>
            <CustomTextInput
              label={'Email or Username'}
              placeholder={'info@example.com'}
              value={emailId}
              onChangeText={text => {
                setEmailId(text);
                setEmailIdErrorText('');
              }}
              returnKeyType="next"
              keyboardType={'email-address'}
              errorText={emailIdErrorText}
              onSubmit={() => password_ref.current?.focus()}
              // onSubmit={() => {
              //   this.secondTextInput.focus();
              // }}
            />
            <CustomTextInput
              ref={password_ref}
              // ref={input => {
              //   this.secondTextInput = input;
              // }}
              label={'Password'}
              placeholder={'Password'}
              value={password}
              onChangeText={text => {
                setPassword(text);
                setPasswordErrorText('');
              }}
              errorText={passwordErrorText}
              secureTextEntry={true}
            />
            {/* <TextInput
            // ref={textInputRef}
            placeholder={'info@example.com'}
            value={emailId}
            onChangeText={text => {
              setEmailId(text);
            }}
            autoFocus={true}
            returnKeyType="next"
            // blurOnSubmit={true}
            onSubmitEditing={() => password_ref.current?.focus()}
            // onSubmit={() => {
            //   this.secondTextInput.focus();
            // }}
          />
          <TextInput
            ref={password_ref}
            // ref={'password_ref'}
            // ref={input => {
            //   this.secondTextInput = input;
            // }}
            placeholder={'Password'}
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
          /> */}

            <Text
              style={{
                color: Colors.grey,
                fontSize: 16,
                fontFamily: Fonts.Regular_font,
                alignSelf: 'flex-end',
              }}>
              Forget Password
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                validate();
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
          {/* <GestureRecognizer
            // onSwipeUp={state => onSwipeUp(state)}
            style={{
              flex: 1,
              // alignSelf: 'flex-end',
              width: screen_width,
              // height: screen_width,
            }}
            config={config}> */}
          <View>
            <LoginBottomCurve
              width={screen_width}
              height={screen_height}
              style={{
                flex: 1,
                // marginHorizontal: 0,
                // width: screen_width,
                marginTop: -(screen_height / 3),
                zIndex: 0,
                // position: 'absolute',
                // alignSelf: 'flex-end',
                // alignSelf: 'flex-end',
                // height: screen_width,
                marginBottom: -(screen_height / 2.8),
              }}
            />
            <TouchableOpacity
              style={{position: 'absolute', bottom: 50, left: 20}}
              onPress={() => {
                navigation.navigate(NAVIGATION.SIGN_UP);
              }}
              activeOpacity={0.8}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  fontFamily: Fonts.Regular_font,
                  color: Colors.white,
                }}>
                New User
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  fontFamily: Fonts.Regular_font,
                  color: Colors.primary_color,
                }}>
                Tap To Sign up
              </Text>
            </TouchableOpacity>
          </View>
          {/* </GestureRecognizer> */}
          {/* <TextInput
          value={name}
          onChangeText={value => setName(value)}
          placeholder="Name"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <TextInput
          ref={passwordRef}
          value={password}
          onChangeText={value => setPassword(value)}
          placeholder="Password"
          returnKeyType="done"
        /> */}
        </ScrollView>
      </View>
    </>
  );
};
export default Login;
