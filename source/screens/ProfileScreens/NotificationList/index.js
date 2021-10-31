import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, FlatList} from 'react-native';
import {ContentLoader} from '../../../components';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Fonts} from '../../../utils/fonts';
import {useSelector, useDispatch} from 'react-redux';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const NotificationList = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  let UserReducer = useSelector(state => state.UserReducer);
  useEffect(() => {
    if (UserReducer) {
      setNotificationList(
        route.params.unread
          ? UserReducer.userNotificationUnread
          : UserReducer.userNotificationRead,
      );
      setIsLoading(UserReducer.isLoading);
    }
  }, [UserReducer]);
  useEffect(() => {
    // dispatch(getUserNotifications(navigation, route.params.unread));
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [notificationList, setNotificationList] = useState([
    // {name: 'gdhgsdgfsad'},
    // {name: 'gdhgsdgfsad'},
  ]);

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

  const renderPosts = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: Colors.light_primary_color,
          borderRadius: 5,
          padding: 10,
          marginBottom: 5,
        }}>
        <Text
          style={{
            color: Colors.primary_color,
            fontSize: 14,
            fontWeight: '400',
            fontFamily: Fonts.Regular_font,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };
  return (
    <>
      <View style={Styles.View_Main}>
        {isLoading ? (
          <ContentLoader />
        ) : (
          <FlatList
            style={{marginVertical: 15}}
            showsVerticalScrollIndicator={false}
            data={notificationList}
            renderItem={renderPosts}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => {
              return (
                <View
                  style={{
                    backgroundColor: Colors.light_primary_color,
                    borderColor: Colors.primary_color,
                    borderRadius: 15,
                    padding: 15,
                    margin: 10,
                    borderWidth: 1,
                  }}>
                  <Text style={{fontSize: 14, fontFamily: Fonts.Regular_font}}>
                    You have no {route.params.unread ? 'Unread' : ''}{' '}
                    Notification
                  </Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </>
  );
};
export default NotificationList;
