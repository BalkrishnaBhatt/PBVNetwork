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

const ExportData = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);
  const [exported, setExported] = useState(false);
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
  return (
    <>
      <View style={Styles.View_Main}>
        {!exported ? (
          <View>
            <Text style={[Styles.text_style, {marginVertical: 15}]}>
              You can request an export of your personal data, containing the
              following items if applicable:
            </Text>
            <Text style={Styles.text_style}> ■ Personal information</Text>
            <Text style={Styles.text_style}> ■ Comments</Text>
            <Text style={Styles.text_style}> ■ Media</Text>
            <Text style={Styles.text_style}> ■ Paid Memberships Pro Data</Text>
            <Text style={Styles.text_style}>
              {' '}
              ■ Extended Profile information
            </Text>
            <Text style={Styles.text_style}> ■ Activity Data</Text>
            <Text style={Styles.text_style}> ■ Friends</Text>
            <Text style={Styles.text_style}> ■ Friend Requests (Sent)</Text>
            <Text style={Styles.text_style}> ■ Friend Requests (Received)</Text>
            <Text style={Styles.text_style}> ■ Group Memberships</Text>
            <Text style={Styles.text_style}>
              {' '}
              ■ Pending Group Membership Requests
            </Text>
            <Text style={Styles.text_style}>
              {' '}
              ■ Pending Group Invitations (Received)
            </Text>
            <Text style={Styles.text_style}>
              {' '}
              ■ Pending Group Invitations (Sent)
            </Text>
            <Text style={Styles.text_style}> ■ Private Messages</Text>
            <Text style={Styles.text_style}> ■ Notifications Data</Text>
            <Text style={Styles.text_style}> ■ Personal settings</Text>
            <Text style={[Styles.text_style, {marginVertical: 15}]}>
              If you want to make a request, please click on the button below:
            </Text>
            <TouchableOpacity style={Styles.button_style}>
              <Text style={[Styles.text_style, {color: Colors.white}]}>
                Request Personal Data Export
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={[Styles.text_style, {marginVertical: 15}]}>
              You previously requested an export of your personal data on May
              23, 2023.
            </Text>
            <Text style={Styles.text_style}>
              You will receive a link to download your export via email once we
              are able to fulfill your request.
            </Text>
          </View>
        )}
      </View>
    </>
  );
};
export default ExportData;
