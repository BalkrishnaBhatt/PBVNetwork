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
import axiosInstance from '../../../axios';
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
import {Store} from '../../../redux/store';
import {console_log} from '../../../utils/loggers';
import {ContentLoader} from '../../../components';

const ProfileVisibility = ({navigation, route, ...props}) => {
  const [optionsList, setOptionsList] = useState([]);
  const [detailsList, setDetailsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getOptionList = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url =
      'pbvnetwork/v1/xprofile/fields?user_id=' +
      Store.getState().AuthenticationReducer.userId;
    axiosInstance
      .get(url, {}, config)
      .then(async response => {
        console_log(
          `getOptionList response :`,
          JSON.stringify(response, null, 2),
        );
        let cloneList = [];
        let rawData = response.data.fields.Base;
        Object.keys(rawData).map(element => {
          let obj = {
            entity: rawData[element].field,
            value: rawData[element].selected_option,
            fieldName: element,
          };
          cloneList.push(obj);
        });
        setDetailsList(cloneList);
        let cloneList1 = [];
        let rawData1 = response.data.visibility_options;
        Object.keys(rawData1).map(element => {
          let obj = {
            label: rawData1[element].label,
            value: rawData1[element].id,
          };
          cloneList1.push(obj);
        });
        setOptionsList(cloneList1);
        setIsLoading(false);
      })
      .catch(function (error) {
        console_log('getOptionList error: ', JSON.stringify(error, null, 2));
        setIsLoading(false);
      });
  };
  const setOptionList = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let fields = '';
    let values = '';
    detailsList.map(element => {
      fields = fields + ',' + element.fieldName;
      values = values + ',' + element.value;
    });
    let url = `pbvnetwork/v1/xprofile/update_levels?user_id=${
      Store.getState().AuthenticationReducer.userId
    }&fields=${fields}&values=${values}`;

    console.log('url: ', url);

    axiosInstance
      .post(url, {}, config)
      .then(async response => {
        console_log(
          `setOptionList response :`,
          JSON.stringify(response, null, 2),
        );
        // setIsLoading(false);
      })
      .catch(function (error) {
        console_log('setOptionList error: ', JSON.stringify(error, null, 2));
        // setIsLoading(false);
      });
  };
  useEffect(() => {
    getOptionList();
  }, []);
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
                <Text style={Styles.menuTriggertextStyle}>
                  {item.value == 'public'
                    ? 'Everyone'
                    : item.value == 'adminsonly'
                    ? 'Only Me'
                    : item.value == 'loggedin'
                    ? 'All Members'
                    : 'My Friends'}
                </Text>
                <DownArrowSymbol height={20} width={10} fill={Colors.grey} />
              </View>
            }
          />
          <MenuOptions>
            {optionsList.map((option, index) => {
              return (
                <MenuOption
                  onSelect={() => updateValues(item.entity, option.value)}
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
        {isLoading ? (
          <ContentLoader />
        ) : (
          <>
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
              ListFooterComponent={() => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      setOptionList();
                    }}
                    style={{
                      backgroundColor: Colors.light_primary_color,
                      borderRadius: 5,
                      paddingHorizontal: 25,
                      paddingVertical: 10,
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: Colors.primary_color,
                        fontSize: 16,
                        fontFamily: Fonts.Regular_font,
                      }}>
                      Save
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </>
        )}
      </View>
    </>
  );
};
export default ProfileVisibility;
