import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {
  MyActivityView,
  NewsView,
  ContentLoader,
  CustomSafeAreaView,
  EmptyList,
  CustomHeader,
} from '../../../components';
import {ContactTopCurve} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {EMAIL_PATTERN} from '../../../constant';
import {Fonts} from '../../../utils/fonts';
import {Store} from '../../../redux/store';

import {
  getHomeActivities,
  getHomeNews,
  setLoader,
} from '../../../redux/actions';
import axiosInstance from '../../../axios';
import {console_log} from '../../../utils/loggers';
import {useSelector, useDispatch} from 'react-redux';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const CreateOpportunity = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [yourNameErrorText, setYourNameErrorText] = useState('');
  const [yourEmailErrorText, setYourEmailErrorText] = useState('');
  const [subject, setSubject] = useState('');
  const [yourMessage, setYourMessage] = useState('');
  const [addresseData, setAddresseData] = useState({});
  useEffect(() => {
    // dispatch(setLoader(true));
    GetAddress();
  }, []);
  const validate = () => {
    let error_flag = true;
    if (yourEmail == '') {
      setYourEmailErrorText('Please Enter Your Email');
      error_flag = false;
    } else if (!validateEmail()) {
      setYourEmailErrorText('Sorry, your email is invalid.');
      error_flag = false;
    }
    if (yourName == '') {
      setYourNameErrorText('Please Enter Your Name');
      error_flag = false;
    }
    if (error_flag) {
      // navigation.navigate(NAVIGATION.DASHBOARD);
      dispatch(setLoader(true));
      PostComment();
    }
  };
  const validateEmail = () => {
    return EMAIL_PATTERN.test(yourEmail);
  };
  const GetAddress = async () => {
    let url = 'pbvnetwork/v1/contactdetail';
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    axiosInstance
      .get(url, config)
      .then(async response => {
        console_log(
          'GetAddress response: ',
          JSON.stringify(response.data, null, 2),
        );
        if (response.status == 200) {
          setAddresseData(response.data);
          setIsLoading(false);
        }
        // dispatch(setLoader(false));
      })
      .catch(function (error) {
        // dispatch(setLoader(false));
        console_log(JSON.stringify(error, null, 2));
        // let error_code = error.response.data.code;
        // handle error
      });
  };
  const PostComment = async () => {
    let url = 'contact-form-7/v1/contact-forms/2803/feedback';
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    const formData = new FormData();
    formData.append('your-name', yourName);
    formData.append('your-email', yourEmail);
    formData.append('subject', subject);
    // formData.append("subject", yourMessage);
    axiosInstance
      .post(url, formData, config)
      .then(async response => {
        if (response.status == 200) {
          setYourEmail('');
          setYourName('');
          setSubject('');
          setYourMessage('');
          dispatch(setLoader(false));
        }
        // console_log(
        //   'PostComment response: ',
        //   JSON.stringify(response, null, 2),
        // );
      })
      .catch(function (error) {
        dispatch(setLoader(false));
        console_log(JSON.stringify(error, null, 2));
        // let error_code = error.response.data.code;
        // handle error
      });
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContactTopCurve
            style={{
              marginTop: -400,
              position: 'absolute',
            }}></ContactTopCurve>
          <CustomHeader navigation={navigation} {...props}></CustomHeader>
          <Text style={Styles.text_home}>Contact</Text>
          {isLoading ? (
            <ContentLoader />
          ) : (
            <View style={Styles.view_search_member}>
              <Text style={Styles.text_search_member}>ADDRESSS</Text>
              <Text style={Styles.text_sub}>
                {addresseData.address_line_1 && addresseData.address_line_1}
              </Text>
              <Text style={Styles.text_sub}>{addresseData.address_line_2}</Text>
              <Text style={Styles.text_sub}>Italy</Text>
              <Text style={Styles.text_search_member}>
                {addresseData.countryd}
              </Text>
              <Text style={Styles.text_sub}>Telephone:</Text>
              {addresseData.telephone.map(element => {
                return <Text style={Styles.text_sub}>{element}</Text>;
              })}
              <Text style={Styles.text_sub}>Emails:</Text>
              {addresseData.emails.map(element => {
                return <Text style={Styles.text_sub}>-{element}</Text>;
              })}
              <Text style={Styles.text_sub}>Open Hours:</Text>
              {addresseData.open_hour_text.map(element => {
                return <Text style={Styles.text_sub}>-{element}</Text>;
              })}
              <Text style={Styles.text_search_member}>CONTACT FORM</Text>
              <TextInput
                value={yourName}
                onChangeText={text => {
                  setYourName(text);
                  setYourNameErrorText('');
                }}
                placeholder="Your Name *"
                placeholderTextColor={Colors.border_color}
                style={Styles.TextInput_search_member}
              />
              {yourNameErrorText == '' ? null : (
                <Text
                  style={{
                    color: Colors.red,
                    fontSize: 12,
                    fontFamily: Fonts.Regular_font,
                    // marginTop: -10,
                  }}>
                  {yourNameErrorText}
                </Text>
              )}
              <TextInput
                value={yourEmail}
                onChangeText={text => {
                  setYourEmail(text);
                  setYourEmailErrorText('');
                }}
                placeholder="Your Email *"
                placeholderTextColor={Colors.border_color}
                style={Styles.TextInput_search_member}
              />

              {yourEmailErrorText == '' ? null : (
                <Text
                  style={{
                    color: Colors.red,
                    fontSize: 12,
                    fontFamily: Fonts.Regular_font,
                  }}>
                  {yourEmailErrorText}
                </Text>
              )}
              <TextInput
                value={subject}
                onChangeText={text => {
                  setSubject(text);
                }}
                placeholder="subject"
                placeholderTextColor={Colors.border_color}
                style={Styles.TextInput_search_member}
              />
              <TextInput
                value={yourMessage}
                onChangeText={text => {
                  setYourMessage(text);
                }}
                placeholder="Your Mesage"
                placeholderTextColor={Colors.border_color}
                multiline={true}
                style={[
                  Styles.TextInput_search_member,
                  {height: 100, textAlignVertical: 'top'},
                ]}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  validate();
                }}
                style={Styles.view_load_more}>
                <Text style={Styles.text_load_more}>POST COMMENT</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};
export default CreateOpportunity;
