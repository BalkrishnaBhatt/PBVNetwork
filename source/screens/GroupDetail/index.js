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
  HomeTabSymbol,
  NewsTabSymbol,
  MemberTabSymbol,
  ChartTabSymbol,
  ManageTabSymbol,
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

const GroupDetail = ({navigation, route, ...props}) => {
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
          <Image
            style={{
              height: 200,
              width: '100%',
              position: 'absolute',
            }}
            resizeMode="cover"
            source={{uri: 'https://picsum.photos/200/300'}}
          />
          <CustomHeader
            navigation={navigation}
            headerSymbolColor={Colors.white}
            {...props}></CustomHeader>
          <View style={{flexDirection: 'row', marginTop: 80, marginLeft: 20}}>
            <View
              style={{
                backgroundColor: Colors.white,
                padding: 4,
                borderRadius: 15,
              }}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                }}
                source={{uri: 'https://picsum.photos/200/300'}}
              />
            </View>
            <View style={{justifyContent: 'flex-end', marginLeft: 10}}>
              <Text
                style={{
                  fontFamily: Fonts.Regular_font,
                  fontSize: 14,
                  fontWeight: '400',
                }}>
                Tavarone, Rovelli, Salim & Miani
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Regular_font,
                  fontSize: 12,
                  fontWeight: '300',
                  color: '#A5A5A5',
                }}>
                Public Group 7 hours ago
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginHorizontal: 20,
              backgroundColor: '#F9F9F9',
              padding: 5,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: Colors.border_color,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
              }}
              source={{uri: 'https://picsum.photos/200/300'}}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontFamily: Fonts.Regular_font,
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                Maria Rose
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Regular_font,
                  fontSize: 10,
                  fontWeight: '300',
                  color: '#A5A5A5',
                }}>
                Group Admin
              </Text>
            </View>
          </View>
          <Tab.Navigator
            tabBar={({state, descriptors, navigation}) => (
              // <ScrollView
              //   horizontal
              //   showsHorizontalScrollIndicator={false}
              //   style={{padding: 20, flexGrow: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 20,
                  marginBottom: 20,
                  borderBottomWidth: 1,
                  borderColor: Colors.border_color,
                  paddingBottom: 20,
                }}>
                <View style={Styles.tab_back}>
                  <ChartTabSymbol
                    style={Styles.HomeTabSymbol}
                    fill={Colors.inactive_tab}
                  />
                </View>
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
                      style={[
                        Styles.tab_back,
                        {
                          backgroundColor: !isFocused
                            ? Colors.white
                            : Colors.light_primary_color,
                        },
                      ]}>
                      {/* <Text
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
                      </Text> */}
                      {label == NAVIGATION.MY_ACTIVITIES ? (
                        <HomeTabSymbol
                          style={Styles.HomeTabSymbol}
                          fill={
                            isFocused
                              ? Colors.primary_color
                              : Colors.inactive_tab
                          }
                        />
                      ) : label == NAVIGATION.OPPORTUNITY_MATCHING ? (
                        <MemberTabSymbol
                          style={Styles.HomeTabSymbol}
                          fill={
                            isFocused
                              ? Colors.primary_color
                              : Colors.inactive_tab
                          }
                        />
                      ) : (
                        <NewsTabSymbol
                          style={Styles.HomeTabSymbol}
                          fill={
                            isFocused
                              ? Colors.primary_color
                              : Colors.inactive_tab
                          }
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
                <View style={Styles.tab_back}>
                  <ManageTabSymbol
                    style={Styles.HomeTabSymbol}
                    fill={Colors.inactive_tab}
                  />
                </View>
                {/* </ScrollView> */}
              </View>
            )}>
            <Tab.Screen
              name={NAVIGATION.LATEST_NEWS}
              component={LatestNews}
              initialParams={{from_group: true}}
            />
            <Tab.Screen
              name={NAVIGATION.MY_ACTIVITIES}
              component={MyActivities}
              initialParams={{from_group: true}}
            />
            <Tab.Screen
              name={NAVIGATION.OPPORTUNITY_MATCHING}
              component={OpportunityMatching}
              initialParams={{from_group: true}}
            />

            {/* <Tab.Screen
              name={NAVIGATION.PBV_GROUP_PROFILE}
              component={PbvGroupProfile}
            /> */}
          </Tab.Navigator>
        </ScrollView>
      </View>
    </>
  );
};
export default GroupDetail;
