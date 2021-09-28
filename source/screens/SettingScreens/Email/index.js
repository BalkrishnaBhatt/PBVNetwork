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
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
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
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Email = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);
  const [mention, setMention] = useState('');
  const [reply, setReply] = useState('');
  const [invite, setInvite] = useState('');
  const [groupInformation, setGroupInformation] = useState('');
  const [promotion, setPromotion] = useState('');
  const [request, setRequest] = useState('');
  const [approve, setApprove] = useState('');
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
            ToastAndroid.show('Changes Saved successfully', ToastAndroid.SHORT);
          }}
          style={Styles.view_save_changes}>
          <Text style={Styles.text_save_changes}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Email;
