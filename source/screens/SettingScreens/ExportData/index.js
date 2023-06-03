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
import axiosInstance from '../../../axios';
import Styles from './style';
import HTML from 'react-native-render-html';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Fonts} from '../../../utils/fonts';
import {console_log} from '../../../utils/loggers';
import {Store} from '../../../redux/store';
import {ContentLoader} from '../../../components';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const ExportData = ({navigation, route, ...props}) => {
  const [exported, setExported] = useState(false);
  const [htmlContent, setHtmlContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getHtmlContent = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url =
      'xprofile/v1/export_data?user_id=' +
      Store.getState().AuthenticationReducer.userId;
    axiosInstance
      .get(url, {}, config)
      .then(async response => {
        console_log(
          `getHtmlContent response :`,
          JSON.stringify(response, null, 2),
        );
        setExported(response.data.user_request);
        setHtmlContent(response.data.html);
        setIsLoading(false);
      })
      .catch(function (error) {
        console_log('getHtmlContent error: ', JSON.stringify(error, null, 2));
      });
  };
  const requestExportData = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url =
      'xprofile/v1/create_export_request/?user_id=' +
      Store.getState().AuthenticationReducer.userId;
    axiosInstance
      .post(url, {}, config)
      .then(async response => {
        console_log(
          `requestExportData response :`,
          JSON.stringify(response, null, 2),
        );
        getHtmlContent();
      })
      .catch(function (error) {
        console_log(
          'requestExportData error: ',
          JSON.stringify(error, null, 2),
        );
      });
  };
  useEffect(() => {
    getHtmlContent();
  }, []);
  const html_style = {
    p: {
      fontSize: 14,
      fontWeight: '300',
      fontFamily: Fonts.Regular_font,
      color: Colors.black,
    },
  };
  return (
    <>
      <View style={Styles.View_Main}>
        {isLoading ? (
          <ContentLoader />
        ) : (
          <>
            <HTML
              source={{
                html: htmlContent?.before_btn,
              }}
              tagsStyles={html_style}
            />
            {!exported ? (
              <View>
                {/* <Text style={[Styles.text_style, {marginVertical: 15}]}>
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
            </Text> */}
                <TouchableOpacity
                  style={Styles.button_style}
                  activeOpacity={0.8}
                  onPress={() => {
                    requestExportData();
                  }}>
                  <Text style={[Styles.text_style]}>
                    Request Personal Data Export
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                {/* <Text style={[Styles.text_style, {marginVertical: 15}]}>
              You previously requested an export of your personal data on May
              23, 2023.
            </Text>
            <Text style={Styles.text_style}>
              You will receive a link to download your export via email once we
              are able to fulfill your request.
            </Text> */}
              </View>
            )}
            <HTML
              source={{
                html: htmlContent?.after_btn,
              }}
              tagsStyles={html_style}
            />
          </>
        )}
      </View>
    </>
  );
};
export default ExportData;
