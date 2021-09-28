import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import CustomHeader from '../../../components/CustomHeader';
import {ContactTopCurve} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {EMAIL_PATTERN} from '../../../constant';
import {Fonts} from '../../../utils/fonts';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const CreateOpportunity = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [yourNameErrorText, setYourNameErrorText] = useState('');
  const [yourEmailErrorText, setYourEmailErrorText] = useState('');
  const [subject, setSubject] = useState('');
  const [yourMessage, setYourMessage] = useState('');
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
    }
  };
  const validateEmail = () => {
    return EMAIL_PATTERN.test(yourEmail);
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
          <View style={Styles.view_search_member}>
            <Text style={Styles.text_search_member}>ADDRESSS</Text>
            <Text style={Styles.text_sub}>Contrada Salvini 5,</Text>
            <Text style={Styles.text_sub}>21034 Cocquio Trevisago (VA),</Text>
            <Text style={Styles.text_sub}>Italy</Text>
            <Text style={Styles.text_search_member}>CONTACT DETAILS</Text>
            <Text style={Styles.text_sub}>Telephone: +39 0332 700542</Text>
            <Text style={Styles.text_sub}>
              Emails: info@pbvmonitor.com, ambrogio.visconti@monitor.com
            </Text>
            <Text style={Styles.text_sub}>Monday-Friday: 9am to 5pm</Text>
            <Text style={Styles.text_sub}>Saturday: 9am to 1pm</Text>
            <Text style={Styles.text_sub}>Sunday: Closed</Text>
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
        </ScrollView>
      </View>
    </>
  );
};
export default CreateOpportunity;
