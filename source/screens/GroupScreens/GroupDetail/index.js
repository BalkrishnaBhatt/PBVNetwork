import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  HomeTabSymbol,
  NewsTabSymbol,
  MemberTabSymbol,
  ChartTabSymbol,
  ManageTabSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import {NAVIGATION} from '../../../constant';
import {Fonts} from '../../../utils/fonts';
import Styles from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Overview from '../Overview';
import Manage from '../Manage';

import {
  ContentLoader,
  GroupListView,
  CustomSafeAreaView,
  CustomHeader,
} from '../../../components';
import GroupActivities from '../../GroupScreens/GroupActivities';
import GroupNews from '../../GroupScreens/GroupNews';
import GroupOpportunity from '../../GroupScreens/GroupOpportunity';
import {useSelector, useDispatch} from 'react-redux';
import {console_log} from '../../../utils/loggers';
import {getGroupDetails} from '../../../redux/actions';
import GroupOverview from '../GroupOverview';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const GroupDetail = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  let GroupDetailReducer = useSelector(state => state.GroupDetailReducer);
  useEffect(() => {
    // dispatch(getGroupDetails(navigation));
    if (GroupDetailReducer) {
      setGroupDetails(GroupDetailReducer.groupDetails);
      console_log(
        'GroupDetailReducer.groupDetails: ',
        JSON.stringify(GroupDetailReducer.groupDetails, null, 2),
      );
    }
    setIsLoading(GroupDetailReducer.isLoading);
  }, [GroupDetailReducer.groupDetails]);

  const [groupDetails, setGroupDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View style={Styles.View_Main}>
        {isLoading ? (
          <ContentLoader />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
            <Image
              style={{
                height: 200,
                width: '100%',
                position: 'absolute',
              }}
              resizeMode="cover"
              source={{
                uri:
                  groupDetails && groupDetails.avatar_urls
                    ? groupDetails.avatar_urls.full
                    : '',
              }}
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
                    borderRadius: 10,
                  }}
                  source={{
                    uri:
                      groupDetails && groupDetails.avatar_urls
                        ? groupDetails.avatar_urls.thumb
                        : '',
                  }}
                />
              </View>
              <View style={{justifyContent: 'flex-end', marginLeft: 10}}>
                <Text
                  style={{
                    fontFamily: Fonts.Regular_font,
                    fontSize: 14,
                    fontWeight: '400',
                    color: Colors.black,
                  }}>
                  {groupDetails.name}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Regular_font,
                    fontSize: 12,
                    fontWeight: '300',
                    color: '#A5A5A5',
                  }}>
                  {groupDetails.created_since}
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
                  backgroundColor: 'grey',
                }}
                source={{
                  uri:
                    groupDetails.admins && groupDetails.admins[0].photo
                      ? groupDetails.admins[0].photo
                      : '',
                }}
              />
              <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    fontFamily: Fonts.Regular_font,
                    fontSize: 12,
                    fontWeight: '500',
                    color: Colors.black,
                  }}>
                  {groupDetails.admins && groupDetails.admins[0].display_name}
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
              initialRouteName={NAVIGATION.GROUP_ACTIVITIES}
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
                    paddingRight: -40,
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
                        {label == NAVIGATION.GROUP_ACTIVITIES ? (
                          <HomeTabSymbol
                            style={Styles.HomeTabSymbol}
                            fill={
                              isFocused
                                ? Colors.primary_color
                                : Colors.inactive_tab
                            }
                          />
                        ) : label == NAVIGATION.GROUP_OPPORTUNITY ? (
                          <MemberTabSymbol
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
                        ) : label == NAVIGATION.MANAGE ? (
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
                  {/* <View style={Styles.tab_back}>
                  <ManageTabSymbol
                    style={Styles.HomeTabSymbol}
                    fill={Colors.inactive_tab}
                  />
                </View> */}
                  {/* </ScrollView> */}
                </View>
              )}>
              <Tab.Screen
                name={NAVIGATION.OVERVIEW}
                component={GroupOverview}
              />
              <Tab.Screen
                name={NAVIGATION.GROUP_NEWS}
                component={GroupNews}
                initialParams={{from_group: true}}
              />
              <Tab.Screen
                name={NAVIGATION.GROUP_ACTIVITIES}
                component={GroupActivities}
                initialParams={{from_group: true}}
              />
              <Tab.Screen
                name={NAVIGATION.GROUP_OPPORTUNITY}
                component={GroupOpportunity}
                initialParams={{from_group: true}}
              />
              <Tab.Screen name={NAVIGATION.MANAGE} component={Manage} />
            </Tab.Navigator>
          </ScrollView>
        )}
      </View>
    </>
  );
};
export default GroupDetail;
