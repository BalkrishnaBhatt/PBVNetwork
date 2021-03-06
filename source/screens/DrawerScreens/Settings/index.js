import React, {useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import CustomHeader from '../../../components/CustomHeader';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import General from '../../SettingScreens/General';
import Email from '../../SettingScreens/Email';
import {Fonts} from '../../../utils/fonts';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Settings = ({navigation, route, ...props}) => {
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
          <Text style={Styles.text_home}>Settings</Text>

          <Tab.Navigator
            tabBar={({state, descriptors, navigation}) => (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  padding: 20,
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
              name={NAVIGATION.GENERAL}
              component={General}
              // initialParams={{from_group: false}}
            />
            <Tab.Screen
              name={NAVIGATION.EMAIL}
              component={Email}
              // initialParams={{from_group: false}}
            />
          </Tab.Navigator>
        </ScrollView>
      </View>
    </>
  );
};
export default Settings;
