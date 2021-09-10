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
import CustomHeader from '../../components/CustomHeader';
import {
  LoginTopCurve,
  LoginBottomCurve,
  NextRoundArrowSymbol,
} from '../../utils/svg';
import Images from '../../utils/images';
import {Colors} from '../../utils/colors';
import {console_log} from '../../utils/loggers';
import Styles from './style';
import {NAVIGATION} from '../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyActivities from '../MyActivities';
import LatestNews from '../LatestNews';
import {Fonts} from '../../utils/fonts';
import OpportunityMatching from '../OpportunityMatching';
import PbvGroupProfile from '../PbvGroupProfile';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Home = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

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
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View style={Styles.View_Main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomHeader navigation={navigation} {...props}></CustomHeader>
          <Text style={Styles.text_home}>Home</Text>

          <Tab.Navigator
            tabBar={({state, descriptors, navigation}) => (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{padding: 20, flexGrow: 1}}>
                {state.routes.map((route, index) => {
                  const {options} = descriptors[route.key];
                  const label =
                    options.tabBarLabel !== undefined
                      ? options.tabBarLabel
                      : options.title !== undefined
                      ? options.title
                      : route.name;

                  const isFocused = state.index === index;

                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        navigation.navigate(label);
                      }}
                      style={{
                        backgroundColor: !isFocused
                          ? Colors.white
                          : Colors.primary_color,
                        borderRadius: 7,
                        borderWidth: 1,
                        borderColor: isFocused
                          ? Colors.white
                          : Colors.primary_color,
                        marginRight: 4,
                      }}>
                      <Text
                        style={{
                          color: isFocused
                            ? Colors.white
                            : Colors.primary_color,
                          fontSize: 14,
                          margin: 10,
                          fontWeight: '400',
                          fontFamily: Fonts.Regular_font,
                        }}>
                        {label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}>
            <Tab.Screen
              name={NAVIGATION.MY_ACTIVITIES}
              component={MyActivities}
              initialParams={{from_group: false}}
            />
            <Tab.Screen
              name={NAVIGATION.LATEST_NEWS}
              component={LatestNews}
              initialParams={{from_group: false}}
            />
            <Tab.Screen
              name={NAVIGATION.OPPORTUNITY_MATCHING}
              component={OpportunityMatching}
              initialParams={{from_group: false}}
            />
            <Tab.Screen
              name={NAVIGATION.PBV_GROUP_PROFILE}
              component={PbvGroupProfile}
              initialParams={{from_group: false}}
            />
          </Tab.Navigator>
        </ScrollView>
      </View>
    </>
  );
};
export default Home;
