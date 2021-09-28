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
  SearchSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Fonts} from '../../../utils/fonts';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const ManageMembers = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [searchText, setSearchText] = useState('');
  const [peronsList, setPeronsList] = useState([
    {
      person_name: 'Latham',
      profile_image: 'https://picsum.photos/200/300',
      joined: '2 hours, 27 minutes ago',
    },
    {
      person_name: 'White',
      profile_image: 'https://picsum.photos/200/300',
      joined: '1 day, 3 hours ago',
    },
    {
      person_name: 'Baker McKenzie',
      profile_image: 'https://picsum.photos/200/300',
      joined: '1 week, 1 day ago',
    },
    {
      person_name: 'Simpson Thacher',
      profile_image: 'https://picsum.photos/200/300',
      joined: '1 week, 1 day ago',
    },
    {
      person_name: 'Clifford Chance',
      profile_image: 'https://picsum.photos/200/300',
      joined: '1 week, 1 day ago',
    },
  ]);
  const renderPersons = ({item}) => {
    const button_style = {
      // height: 50,
      borderRadius: 10,
      // width: '22%',
      backgroundColor: Colors.primary_color,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      padding: 5,
      flex: 1,
    };
    const text_button = {
      fontSize: 12,
      fontFamily: Fonts.Regular_font,
      fontWeight: '600',
      color: Colors.white,
      // marginHorizontal: 5,
      textAlign: 'center',
    };
    return (
      <TouchableOpacity
        style={{
          // borderBottomWidth: 1,
          // borderColor: Colors.grey,
          // paddingVertical: 15,
          backgroundColor: Colors.light_primary_color,
          borderRadius: 15,
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginBottom: 10,
        }}
        activeOpacity={0.8}
        onPress={() => {
          // route.params.from_group
          //   ? navigation.navigate(NAVIGATION.PROFILE_SCREEN)
          //   : null;
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item.profile_image}}
            resizeMode="cover"
            style={{height: 50, width: 50, borderRadius: 15}}
          />
          <View style={{padding: 10}}>
            <Text
              style={{
                fontSize: 16,
                color: Colors.black,
                // marginBottom: 5,
                fontFamily: Fonts.Regular_font,
                fontWeight: '300',
              }}>
              {item.person_name}
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: Colors.primary_color,
                fontFamily: Fonts.Regular_font,
                fontWeight: '300',
              }}>
              {'joined '}
              {item.joined}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={button_style} activeOpacity={0.8}>
            <Text style={text_button}>{'Kick & Ban'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={button_style} activeOpacity={0.8}>
            <Text style={text_button}>{'Promote to Mod'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={button_style} activeOpacity={0.8}>
            <Text style={text_button}>{'Promote to Admin'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={button_style} activeOpacity={0.8}>
            <Text style={text_button}>{'Remove from group'}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          // height: screen_height,
          // width: screen_width,
        }}>
        <ScrollView>
          <View style={Styles.view_search}>
            <SearchSymbol style={Styles.SearchSymbol}></SearchSymbol>
            <TextInput
              value={searchText}
              onChangeText={text => {
                setSearchText(text);
              }}
              placeholder="Search"
              // multiline={true}
              style={Styles.TextInput}
            />
          </View>

          <FlatList
            style={{marginVertical: 15, marginHorizontal: 20, marginBottom: 50}}
            showsVerticalScrollIndicator={false}
            data={peronsList}
            renderItem={renderPersons}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    </>
  );
};
export default ManageMembers;
