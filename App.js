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
 } from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import {createDrawerNavigator} from '@react-navigation/drawer';
 import Splash from './source/screens/Splash';
 import Login from './source/screens/Login';
 import Signup from './source/screens/Signup';
 import Home from './source/screens/Home';
 import Groups from './source/screens/Groups';
 import Members from './source/screens/Members';
 import Faqs from './source/screens/Faqs';
 import Contact from './source/screens/Contact';
 // import Settings from './source/screens/Settings';
 import TermAndCondition from './source/screens/TermAndCondition';
 import GroupDetail from './source/screens/GroupDetail';
 import CreateOpportunity from './source/screens/CreateOpportunity';
 import {NAVIGATION} from './source/constant';
 
 import CustomDrawer from './source/components/CustomDrawer';
 const Stack = createNativeStackNavigator();
 const Drawer = createDrawerNavigator();
 
 const DrawerNavigator = () => {
   // const [isDarkTheme, setIsDarkTheme] = useState(true);
   // console.log(isDarkTheme);
   return (
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
       <Drawer.Screen
         name={NAVIGATION.GROUPS}
         component={Groups}
         // options={{
         //   drawerLabel: 'Profile Settings',
         //   drawerIcon: () => <Feather name="settings" size={24} color="black" />,
         //   headerTitle: 'Profile Settings',
         // }}
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
       <Drawer.Screen name={NAVIGATION.GROUP_DETAIL} component={GroupDetail} />
       {/* 
       <Drawer.Screen name={NAVIGATION.SETTINGS} component={Settings} />
        */}
     </Drawer.Navigator>
   );
 };
 export default function App() {
   useEffect(() => {
     // checkLocalAuth();
   }, []);
 
   return (
     // <Provider store={store}>
     // <SafeAreaView
     //   style={{
     //     flex: 1,
     //     height: '100%',
     //   }}>
     // <KeyboardAvoidingView
     //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
     //   style={{flex: 1}}>
     <>
       <StatusBar style="dark" />
       <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
           {/* <Stack.Screen name={NAVIGATION.SPLASH} component={Splash} /> */}
           <Stack.Screen name={NAVIGATION.LOGIN} component={Login} />
           {/* <Stack.Screen name={NAVIGATION.SIGN_UP} component={Signup} /> */}
           <Stack.Screen
             name={NAVIGATION.DASHBOARD}
             component={DrawerNavigator}
           />
         </Stack.Navigator>
       </NavigationContainer>
     </>
     // </KeyboardAvoidingView>
     /* </SafeAreaView> */
     // </Provider>
   );
 }
 