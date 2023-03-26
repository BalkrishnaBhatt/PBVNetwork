import React, {useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NotificationList from '../NotificationList';
import {Fonts} from '../../../utils/fonts';
import UserOpportunity from '../UserOpportunity';
import CreateOpportunity from '../../DrawerScreens/CreateOpportunity';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const MyOpportunities = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  useEffect(() => {
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
      <View style={Styles.View_Main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Tab.Navigator
            tabBar={({state, descriptors, navigation}) => (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  paddingHorizontal: 20,
                  flexGrow: 1,
                  // paddingRight: 100,
                }}>
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
                        marginRight:
                          label == NAVIGATION.APPLIED_OPPORTUNITIES ? 30 : 4,
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
              name={NAVIGATION.SEARCH_OPPORTUNITIES}
              component={CreateOpportunity}
              initialParams={{createOpportunity: false}}
            />
            <Tab.Screen
              name={NAVIGATION.NEW_OPPORTUNITIES}
              component={UserOpportunity}
            />
            <Tab.Screen
              name={NAVIGATION.MY_JOB_OPENINGS}
              component={UserOpportunity}
            />
            <Tab.Screen
              name={NAVIGATION.SAVED_OPPORTUNITIES}
              component={UserOpportunity}
            />
            <Tab.Screen
              name={NAVIGATION.APPLIED_OPPORTUNITIES}
              component={UserOpportunity}
            />
          </Tab.Navigator>
        </ScrollView>
      </View>
    </>
  );
};
export default MyOpportunities;
