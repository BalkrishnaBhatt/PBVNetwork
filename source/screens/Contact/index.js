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
  TextInput,
} from 'react-native';
import Common_styles from '../../utils/commonStyle';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import CustomTextInput from '../../components/CustomTextInput';
import CustomHeader from '../../components/CustomHeader';
import {
  LoginTopCurve,
  LoginBottomCurve,
  NextRoundArrowSymbol,
  DownArrowSymbol,
  SearchSymbol,
  ContactTopCurve,
} from '../../utils/svg';
import Images from '../../utils/images';
import {Colors} from '../../utils/colors';
import {console_log} from '../../utils/loggers';
import Styles from './style';
import {NAVIGATION} from '../../constant';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const CreateOpportunity = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [yourMessage, setYourMessage] = useState('');
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
              marginTop: -320,
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
              }}
              placeholder="Your Name *"
              placeholderTextColor={Colors.border_color}
              style={Styles.TextInput_search_member}
            />
            <TextInput
              value={yourEmail}
              onChangeText={text => {
                setYourEmail(text);
              }}
              placeholder="Your Email *"
              placeholderTextColor={Colors.border_color}
              style={Styles.TextInput_search_member}
            />
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
              style={[Styles.TextInput_search_member, {height: 100}]}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // navigation.navigate(label);
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
