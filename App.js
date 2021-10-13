/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  BackHandler,
  YellowBox,
  LogBox,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Splash from './source/screens/Authentication/Splash';
import Login from './source/screens/Authentication/Login';
import Signup from './source/screens/Authentication/Signup';
////////////////////////////////////////////////////////////////
import Home from './source/screens/DrawerScreens/Home';
import Groups from './source/screens/DrawerScreens/Groups';
import Profile from './source/screens/DrawerScreens/Profile';
import Members from './source/screens/DrawerScreens/Members';
import Faqs from './source/screens/DrawerScreens/Faqs';
import Contact from './source/screens/DrawerScreens/Contact';
import Settings from './source/screens/DrawerScreens/Settings';
import TermAndCondition from './source/screens/DrawerScreens/TermAndCondition';
import CreateOpportunity from './source/screens/DrawerScreens/CreateOpportunity';
///////////////////////////////////////////////////////////////
import GroupDetail from './source/screens/GroupScreens/GroupDetail';
// import ProfileScreen from './source/screens/GroupScreens/ProfileScreen';
///////////////////////////////////////////////////////////////
import {NAVIGATION} from './source/constant';
///////////////////////////////////////////////////////////////
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {Store} from './source/redux/store';
import {CustomLoader, CustomDrawer} from './source/components';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import {useSelector, useDispatch} from 'react-redux';

const DrawerNavigator = () => {
  let LoaderReducer = useSelector(state => state.LoaderReducer);
  // const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(isDarkTheme);
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  // const backAction = () => {
  //   BackHandler.exitApp();
  // };

  useEffect(() => {
    if (LoaderReducer && LoaderReducer.isLoading) {
      setIsLoading(LoaderReducer.isLoading);
    } else {
      setIsLoading(false);
    }
  }, [LoaderReducer]);
  return (
    <>
      {LoaderReducer && (
        <CustomLoader
          // errorMessage={'LoaderReducer.loading'}
          // visible={LoaderReducer.loading}
          visible={isLoading}
        />
      )}
      <Drawer.Navigator
        screenOptions={{headerShown: false, drawerType: 'front'}}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name={NAVIGATION.HOME}
          component={Home}
          // options={{
          //   drawerIcon: () => (
          //     <MaterialIcons name="person-outline" size={24} color="black" />
          //   ),
          // }}
          // initialParams={{ isDarkTheme: isDarkTheme }}
        />
        <Drawer.Screen name={NAVIGATION.MEMBERS} component={Members} />
        <Drawer.Screen
          name={NAVIGATION.CREATE_OPPORTUNITY}
          component={CreateOpportunity}
        />
        <Drawer.Screen name={NAVIGATION.CONTACT} component={Contact} />
        <Drawer.Screen
          name={NAVIGATION.TERM_AND_CONDITION}
          component={TermAndCondition}
        />
        <Drawer.Screen name={NAVIGATION.FAQS} component={Faqs} />
        <Drawer.Screen name={NAVIGATION.PROFILE} component={Profile} />
        <Drawer.Screen
          name={NAVIGATION.GROUPS_ROUTER}
          component={GroupRouter}
        />
        {/* <Drawer.Screen
          name={NAVIGATION.GROUPS}
          component={Groups}
          // options={{
          //   drawerLabel: 'Profile Settings',
          //   drawerIcon: () => <Feather name="settings" size={24} color="black" />,
          //   headerTitle: 'Profile Settings',
          // }}
        />
        <Drawer.Screen name={NAVIGATION.GROUP_DETAIL} component={GroupDetail} /> */}
        {/* <Drawer.Screen
         name={NAVIGATION.PROFILE_SCREEN}
         component={ProfileScreen}
       /> */}

        <Drawer.Screen name={NAVIGATION.SETTINGS} component={Settings} />
      </Drawer.Navigator>
    </>
  );
};

const GroupRouter = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={NAVIGATION.GROUPS} component={Groups} />
        <Stack.Screen name={NAVIGATION.GROUP_DETAIL} component={GroupDetail} />
      </Stack.Navigator>
    </>
  );
};

export default function App() {
  useEffect(() => {
    // checkLocalAuth();
  }, []);

  return (
    <Provider store={Store}>
      {/* <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
      }}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}> */}
      <>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name={NAVIGATION.SPLASH} component={Splash} /> */}
            <Stack.Screen name={NAVIGATION.LOGIN} component={Login} />
            <Stack.Screen name={NAVIGATION.SIGN_UP} component={Signup} />
            <Stack.Screen
              name={NAVIGATION.DASHBOARD}
              component={DrawerNavigator}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
      {/* </KeyboardAvoidingView>
     </SafeAreaView>  */}
    </Provider>
  );
}
