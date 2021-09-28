import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import CustomTextInput from '../../../components/CustomTextInput';
import {
  SignUpBottomCurve,
  SignUpTopCurve,
  NextRoundArrowSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import {NAVIGATION, EMAIL_PATTERN} from '../../../constant';
import {Fonts} from '../../../utils/fonts';
import GestureRecognizer from 'react-native-swipe-gestures';

// const screen_width = Dimensions.get('window').width;
// const screen_height = Dimensions.get('window').height;

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};
const Signup = ({navigation, route}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [firmName, setFirmName] = useState('');
  const [userName, setUserName] = useState('');
  const [firstNameErrorText, setFirstNameErrorText] = useState('');
  const [lastNameErrorText, setLastNameErrorText] = useState('');
  const [emailIdErrorText, setEmailIdErrorText] = useState('');
  const [firmNameErrorText, setFirmNameErrorText] = useState('');
  const [userNameErrorText, setUserNameErrorText] = useState('');
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
      console.log('device rotaated', width, height);
    });
    return () => Dimensions.removeEventListener();
  }, []);
  // const password_ref = useRef(null);

  const validate = () => {
    let error_flag = true;
    if (emailId == '') {
      setEmailIdErrorText('Please Enter Email or Username');
      error_flag = false;
    } else if (!validateEmail()) {
      setEmailIdErrorText('Sorry, your email is invalid.');
      error_flag = false;
    }
    if (firstName == '') {
      setFirstNameErrorText('Please Enter First name');
      error_flag = false;
    }
    if (lastName == '') {
      setLastNameErrorText('Please Enter Last name');
      error_flag = false;
    }
    if (firmName == '') {
      setFirmNameErrorText('Please Enter Firm name');
      error_flag = false;
    }
    if (userName == '') {
      setUserNameErrorText('Please Enter Username');
      error_flag = false;
    }

    if (error_flag) {
      navigation.navigate(NAVIGATION.DASHBOARD);
    }
  };
  const validateEmail = () => {
    return EMAIL_PATTERN.test(emailId);
  };
  const onSwipeDown = gestureState => {
    navigation.navigate(NAVIGATION.LOGIN);
    console.log('swiped down');
  };
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
          bounces={false}
          showsVerticalScrollIndicator={false}
          // style={{flexGrow: 1}}
          // contentContainerStyle={{flex: 1, paddingBottom: 60}}
        >
          {/* <GestureRecognizer
            // onSwipeDown={state => onSwipeDown(state)}
            style={{
              flex: 1,
              // position: 'absolute',
              // marginTop: -360,
              // marginTop: -(screen_height / 9),
              // height: 400,
            }}
            config={config}> */}
          <View>
            <SignUpTopCurve
              width={screen_width}
              height={screen_height}
              style={{
                flex: 1,
                // margin: 0,
                marginTop: -(screen_height / 2.9),
                // width: screen_width,
                // height: screen_width,
                // marginTop: -400,
                // position: 'absolute',
                // height: screen_width,
                // width: screen_width,
                // marginTop: -100,
                // marginHorizontal: -20,
              }}
            />
            <TouchableOpacity
              style={{position: 'absolute', top: 50, left: 20}}
              onPress={() => {
                navigation.navigate(NAVIGATION.LOGIN);
              }}
              activeOpacity={0.8}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  fontFamily: Fonts.Regular_font,
                  color: Colors.white,
                }}>
                Already Member
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  fontFamily: Fonts.Regular_font,
                  color: Colors.primary_color,
                }}>
                Tap To Login
              </Text>
            </TouchableOpacity>
          </View>
          {/* </GestureRecognizer> */}
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              // marginTop: 280,
              marginTop: -240,
              // marginBottom: -50,
              zIndex: 2,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                fontFamily: Fonts.Regular_font,
              }}>
              Lawyer's
              <Text style={{color: Colors.primary_color}}> Registration</Text>
            </Text>
            <CustomTextInput
              label={'First name'}
              placeholder={'John'}
              value={firstName}
              onChangeText={text => {
                setFirstName(text);
                setFirstNameErrorText('');
              }}
              errorText={firstNameErrorText}
              // onSubmit={() => password_ref.current?.focus()}
            />
            <CustomTextInput
              // ref={password_ref}
              label={'Last name'}
              placeholder={'Doe'}
              value={lastName}
              onChangeText={text => {
                setLastName(text);
                setLastNameErrorText('');
              }}
              errorText={lastNameErrorText}
              secureTextEntry={true}
            />
            <CustomTextInput
              label={'Email'}
              placeholder={'info@example.com'}
              value={emailId}
              onChangeText={text => {
                setEmailId(text);
                setEmailIdErrorText('');
              }}
              errorText={emailIdErrorText}
              keyboardType={'email-address'}
              // onSubmit={() => password_ref.current?.focus()}
            />
            <CustomTextInput
              label={'Firm name'}
              placeholder={'info@example.com'}
              value={firmName}
              onChangeText={text => {
                setFirmName(text);
                setFirmNameErrorText('');
              }}
              errorText={firmNameErrorText}
              // onSubmit={() => password_ref.current?.focus()}
            />
            <CustomTextInput
              label={'Username'}
              placeholder={'info_example'}
              value={userName}
              onChangeText={text => {
                setUserName(text);
                setUserNameErrorText('');
              }}
              errorText={userNameErrorText}
              // onSubmit={() => password_ref.current?.focus()}
            />
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
                // marginBottom: -50,
              }}>
              <NextRoundArrowSymbol />
            </TouchableOpacity>
          </View>
          <View
            style={{
              // flex: 1,
              // height: screen_width,
              marginTop: -(screen_height / 2.6),
              marginBottom: -(screen_height / 2.6),
              zIndex: 0,
            }}>
            <SignUpBottomCurve width={screen_width} height={screen_height} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default Signup;
