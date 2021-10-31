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
  ToastAndroid,
} from 'react-native';
import {
  HomeTabSymbol,
  NewsTabSymbol,
  MemberTabSymbol,
  ChartTabSymbol,
  ManageTabSymbol,
  PowerButtonSymbol,
  RadioNotSelectedSymbol,
  RadioSelectedSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Fonts} from '../../../utils/fonts';
import Common_styles from '../../../utils/commonStyle';
import {useSelector, useDispatch} from 'react-redux';
import {console_log} from '../../../utils/loggers';
import {Store} from '../../../redux/store';
import axiosInstance from '../../../axios';
import {
  getAllGroups,
  getMyGroups,
  getGroupDetails,
  getUserSettings,
  setLoader,
} from '../../../redux/actions';
import {ContentLoader, GroupListView, EmptyList} from '../../../components';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Email = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  let UserReducer = useSelector(state => state.UserReducer);
  useEffect(() => {
    if (UserReducer.userSettings !== {}) {
      console.log('UserReducer.userSettings: ', UserReducer.userSettings);
      let data_to_set = UserReducer.userSettings;
      setMention(data_to_set.activity_new_mention);
      setReply(data_to_set.activity_new_reply);
      setInvite(data_to_set.groups_invite);
      setGroupInformation(data_to_set.groups_group_updated);
      setPromotion(data_to_set.groups_admin_promotion);
      setRequest(data_to_set.groups_membership_request);
      setApprove(data_to_set.membership_request_completed);
      // console.log('UserReducer.myGroups: ', UserReducer.myGroups);
      setIsLoading(UserReducer.isLoading);
    }
  }, [UserReducer]);
  useEffect(() => {
    dispatch(getUserSettings(navigation));
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [mention, setMention] = useState(false);
  const [reply, setReply] = useState(false);
  const [invite, setInvite] = useState(false);
  const [groupInformation, setGroupInformation] = useState(false);
  const [promotion, setPromotion] = useState(false);
  const [request, setRequest] = useState(false);
  const [approve, setApprove] = useState(false);
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
  const UpdateUserSettings = async () => {
    let url =
      'pbvnetwork/v1/usersettings/' +
      Store.getState().AuthenticationReducer.userId;
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let activity_new_mention = mention ? 'yes' : 'no';
    let activity_new_reply = reply ? 'yes' : 'no';
    let groups_invite = invite ? 'yes' : 'no';
    let groups_group_updated = groupInformation ? 'yes' : 'no';
    let groups_admin_promotion = promotion ? 'yes' : 'no';
    let groups_membership_request = request ? 'yes' : 'no';
    let membership_request_completed = approve ? 'yes' : 'no';
    url =
      url +
      '?activity_new_mention=' +
      activity_new_mention +
      '&activity_new_reply=' +
      activity_new_reply +
      '&groups_invite=' +
      groups_invite +
      '&groups_group_updated=' +
      groups_group_updated +
      '&groups_admin_promotion=' +
      groups_admin_promotion +
      '&groups_membership_request=' +
      groups_membership_request +
      '&membership_request_completed=' +
      membership_request_completed;
    console.log('UpdateUserSettingsurl', url);
    axiosInstance
      .post(url, {}, config)
      .then(async response => {
        dispatch(setLoader(false));
        console_log(
          'UpdateUserSettings response: ',
          JSON.stringify(response.data, null, 2),
        );
      })
      .catch(function (error) {
        console_log(
          'UpdateUserSettings error',
          JSON.stringify(error.response, null, 2),
        );
        dispatch(setLoader(false));
        // handle error
        let error_code = error.response.data.code;
        if (
          error_code == 'jwt_auth_invalid_token' ||
          error_code == 'rest_forbidden'
        ) {
          navigation.replace(NAVIGATION.LOGIN);
        }
        // console_log('Error of config', error.config);
      });
  };
  return (
    <>
      <View style={Styles.View_Main}>
        <Text style={Styles.text_send_email}>Send an email notice when:</Text>
        <Text style={Styles.text_activity}>Activity</Text>
        <View style={Styles.view_field_main}>
          <Text style={Styles.text_description}>
            A member mentions you in an update using "@pbvnetwork"
          </Text>
          <View style={Common_styles.Flex_Direction_Row_with_center}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setMention(true)}>
              {mention ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>Yes</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setMention(false)}>
              {!mention ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>No</Text>
          </View>
        </View>
        <View style={[Styles.view_field_main, {borderBottomWidth: 0}]}>
          <Text style={Styles.text_description}>
            A member replies to an update or comment you've posted
          </Text>
          <View style={Common_styles.Flex_Direction_Row_with_center}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setReply(true)}>
              {reply ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>Yes</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setReply(false)}>
              {!reply ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>No</Text>
          </View>
        </View>
        <Text style={Styles.text_activity}>Groups</Text>

        <View style={Styles.view_field_main}>
          <Text style={Styles.text_description}>
            A member invites you to join a group
          </Text>
          <View style={Common_styles.Flex_Direction_Row_with_center}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setInvite(true)}>
              {invite ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>Yes</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setInvite(false)}>
              {!invite ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>No</Text>
          </View>
        </View>
        <View style={Styles.view_field_main}>
          <Text style={Styles.text_description}>
            Group information is updated
          </Text>
          <View style={Common_styles.Flex_Direction_Row_with_center}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setGroupInformation(true)}>
              {groupInformation ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>Yes</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setGroupInformation(false)}>
              {!groupInformation ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>No</Text>
          </View>
        </View>
        <View style={Styles.view_field_main}>
          <Text style={Styles.text_description}>
            You are promoted to a group administrator or moderator
          </Text>
          <View style={Common_styles.Flex_Direction_Row_with_center}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setPromotion(true)}>
              {promotion ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>Yes</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setPromotion(false)}>
              {!promotion ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>No</Text>
          </View>
        </View>
        <View style={Styles.view_field_main}>
          <Text style={Styles.text_description}>
            A member requests to join a private group for which you are an admin
          </Text>
          <View style={Common_styles.Flex_Direction_Row_with_center}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setRequest(true)}>
              {request ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>Yes</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setRequest(false)}>
              {!request ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>No</Text>
          </View>
        </View>

        <View style={[Styles.view_field_main, {borderBottomWidth: 0}]}>
          <Text style={Styles.text_description}>
            Your request to join a group has been approved or denied
          </Text>
          <View style={Common_styles.Flex_Direction_Row_with_center}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setApprove(true)}>
              {approve ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>Yes</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setApprove(false)}>
              {!approve ? (
                <RadioSelectedSymbol style={Styles.RadioSelectedSymbol} />
              ) : (
                <RadioNotSelectedSymbol style={Styles.RadioSelectedSymbol} />
              )}
            </TouchableOpacity>
            <Text style={Styles.text_yes_no}>No</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            // navigation.navigate(label);
            // ToastAndroid.show('Changes Saved successfully', ToastAndroid.SHORT);
            dispatch(setLoader(true));
            UpdateUserSettings();
          }}
          style={Styles.view_save_changes}>
          <Text style={Styles.text_save_changes}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Email;
