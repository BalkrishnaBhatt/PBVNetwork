import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import CustomHeader from '../../../components/CustomHeader';
import {
  HomeTabSymbol,
  NewsTabSymbol,
  MemberTabSymbol,
  ChartTabSymbol,
  ManageTabSymbol,
  PowerButtonSymbol,
  OpportunityTabSymbol,
  NotificationTabSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import {NAVIGATION} from '../../../constant';
import {Fonts} from '../../../utils/fonts';
import Styles from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Overview from '../../GroupScreens/Overview';
import Manage from '../../GroupScreens/Manage';
import UserNews from '../../ProfileScreens/UserNews';
import UserOpportunity from '../../ProfileScreens/UserOpportunity';
import UserActivities from '../../ProfileScreens/UserActivities';
import ProfileScreen from '../../ProfileScreens/ProfileScreen';
import Notification from '../../ProfileScreens/Notification';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Profile = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  // const backAction = () => {
  //   navigation.navigate(NAVIGATION.GROUPS);
  // };
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
          {/* <CustomHeader
            navigation={navigation}
            headerSymbolColor={Colors.white}
            {...props}></CustomHeader> */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{alignSelf: 'flex-end', margin: 20}}
            onPress={() => navigation.goBack()}>
            <PowerButtonSymbol
              style={{
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
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
                  borderRadius: 10,
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
                @pbvnetwork
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Regular_font,
                  fontSize: 12,
                  fontWeight: '300',
                  color: '#A5A5A5',
                }}>
                2 days ago
              </Text>
            </View>
          </View>

          <Tab.Navigator
            // screenOptions={{lazy: true}}
            // lazy={true}
            initialRouteName={NAVIGATION.MY_ACTIVITIES}
            tabBar={({state, descriptors, navigation}) => (
              // <ScrollView
              //   horizontal
              //   showsHorizontalScrollIndicator={false}
              //   style={{padding: 20, flexGrow: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 20,
                  marginBottom: 20,
                  borderBottomWidth: 1,
                  borderColor: Colors.border_color,
                  paddingBottom: 20,
                }}>
                {/* <View style={Styles.tab_back}>
                  <ChartTabSymbol
                    style={Styles.HomeTabSymbol}
                    fill={Colors.inactive_tab}
                  />
                </View> */}
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
                            : '#FAEDB3',
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
                      {label == NAVIGATION.USER_ACTIVITIES ? (
                        <HomeTabSymbol
                          style={Styles.HomeTabSymbol}
                          fill={
                            isFocused
                              ? Colors.primary_color
                              : Colors.inactive_tab
                          }
                        />
                      ) : label == NAVIGATION.USER_OPPORTUNITY ? (
                        <OpportunityTabSymbol
                          style={Styles.HomeTabSymbol}
                          fill={
                            isFocused
                              ? Colors.primary_color
                              : Colors.inactive_tab
                          }
                        />
                      ) : label == NAVIGATION.NOTIFICATION ? (
                        <NotificationTabSymbol
                          style={Styles.HomeTabSymbol}
                          fill={
                            isFocused
                              ? Colors.primary_color
                              : Colors.inactive_tab
                          }
                        />
                      ) : label == NAVIGATION.OVERVIEW ? (
                        <ChartTabSymbol
                          style={Styles.HomeTabSymbol}
                          fill={
                            isFocused
                              ? Colors.primary_color
                              : Colors.inactive_tab
                          }
                        />
                      ) : label == NAVIGATION.PROFILE_SCREEN ? (
                        <ManageTabSymbol
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
                {/* </ScrollView> */}
              </View>
            )}>
            <Tab.Screen name={NAVIGATION.OVERVIEW} component={Overview} />
            <Tab.Screen
              name={NAVIGATION.USER_NEWS}
              component={UserNews}
              initialParams={{from_group: true}}
            />
            <Tab.Screen
              name={NAVIGATION.USER_ACTIVITIES}
              component={UserActivities}
              initialParams={{from_group: true}}
            />
            <Tab.Screen
              name={NAVIGATION.USER_OPPORTUNITY}
              component={UserOpportunity}
              initialParams={{from_group: true}}
            />
            <Tab.Screen
              name={NAVIGATION.PROFILE_SCREEN}
              component={ProfileScreen}
            />
            <Tab.Screen
              name={NAVIGATION.NOTIFICATION}
              component={Notification}
            />
            {/* <Tab.Screen name={NAVIGATION.MANAGE} component={Manage} /> */}
          </Tab.Navigator>
        </ScrollView>
      </View>
    </>
  );
};
export default Profile;
