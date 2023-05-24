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
  FlatList,
} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import {
  HomeTabSymbol,
  NewsTabSymbol,
  MemberTabSymbol,
  ChartTabSymbol,
  ManageTabSymbol,
  PowerButtonSymbol,
  DownArrowSymbol,
  OpenDrawerSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Fonts} from '../../../utils/fonts';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const ProfileVisibility = ({navigation, route, ...props}) => {
  const optionsList = [
    {value: 'everyone', label: 'Everyone'},
    {value: 'onlyme', label: 'Only me'},
    {value: 'allmembers', label: 'All Members'},
    {value: 'myfriends', label: 'My Friends'},
  ];
  const [detailsList, setDetailsList] = useState([
    {
      entity: 'Name',
      value: 'Everyone',
    },
    {
      entity: 'Firm Name',
      value: 'Everyone',
    },
    {
      entity: 'Jurisdiction',
      value: 'Everyone',
    },
    {
      entity: 'Town',
      value: 'Everyone',
    },
    {
      entity: 'Mobile Number',
      value: 'Everyone',
    },
    {
      entity: 'Phone Number',
      value: 'Everyone',
    },
    {
      entity: 'About Me',
      value: 'Everyone',
    },
    {
      entity: 'Job Opportunities',
      value: 'Everyone',
    },
    {
      entity: 'Business Opportunities',
      value: 'Everyone',
    },
  ]);
  const updateValues = (entity, value) => {
    // Update values
    let cloneList = [...detailsList];
    cloneList.map(details => {
      if (details.entity === entity) {
        details.value = value;
      }
    });
    setDetailsList(cloneList);
  };
  const renderDetailsList = ({item}) => {
    const text_style = {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
    };
    return (
      <View
        style={{
          backgroundColor: Colors.grey,
          borderRadius: 5,
          padding: 10,
          // paddingBottom: 200,s
          // paddingBottom: 0,
          // width: '100%',
          marginBottom: 10,
          flexDirection: 'row',
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
        <Text style={text_style}>{item.entity}</Text>
        <View style={{flex: 1}} />
        <Menu>
          <MenuTrigger
            children={
              <View style={Styles.menuTriggerView}>
                <Text style={Styles.menuTriggertextStyle}>{item.value}</Text>
                <DownArrowSymbol
                  height={20}
                  width={10}
                  fill={Colors.grey}
                  // style={{height: 20, width: 30}}
                />
              </View>
            }
          />
          <MenuOptions>
            {optionsList.map((option, index) => {
              return (
                <MenuOption
                  onSelect={() => updateValues(item.entity, option.label)}
                  text={option.label}
                  customStyles={{optionText: Styles.menuOptionText}}
                />
              );
            })}
          </MenuOptions>
        </Menu>
      </View>
    );
  };
  return (
    <>
      <View style={Styles.View_Main}>
        <FlatList
          style={{
            borderTopWidth: 0.5,
            paddingTop: 20,
          }}
          showsVerticalScrollIndicator={false}
          data={detailsList}
          renderItem={renderDetailsList}
          // keyExtractor={item => item.id}
          // ListEmptyComponent={() => {
          //   return <EmptyList />;
          // }}
        />
      </View>
    </>
  );
};
export default ProfileVisibility;
