import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
} from 'react-native';
import {
  FavouriteSymbol,
  CommentsSymbol,
  DeleteSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {Fonts} from '../../../utils/fonts';
import {useSelector, useDispatch} from 'react-redux';
import {
  getHomeActivities,
  getHomeNews,
  setLoader,
} from '../../../redux/actions';

import DropDownPicker from 'react-native-dropdown-picker';
import {
  MyActivityView,
  NewsView,
  ContentLoader,
  CustomSafeAreaView,
} from '../../../components';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const UserActivities = ({navigation, route}) => {
  const dispatch = useDispatch();
  let HomeReducer = useSelector(state => state.HomeReducer);
  useEffect(() => {
    if (HomeReducer) {
      setPosts(HomeReducer.homeActivities);
      setIsLoading(HomeReducer.isLoading);
    }
    // else {
    //   setPosts([]);
    // }
  }, [HomeReducer]);
  useEffect(() => {
    dispatch(getHomeActivities());
    // setTimeout(() => {
    //   dispatch(setLoader(false));
    // }, 6000);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([
    {
      image: 'https://picsum.photos/200/300',
      person_name: 'RodolfoVega',
      description: 'joined the group',
      group_name: 'Baraona Marshall y Cia',
      date: '1630489742',
      number_of_comments: '20',
    },
    {
      image: 'https://picsum.photos/200/300',
      person_name: 'RodolfoVega',
      description: 'joined the group',
      group_name: 'Baraona Marshall y Cia',
      date: '1630489742',
      number_of_comments: '20',
    },
    {
      image: 'https://picsum.photos/200/300',
      person_name: 'RodolfoVega',
      description: 'joined the group',
      group_name: 'Baraona Marshall y Cia',
      date: '1630489742',
      number_of_comments: '20',
    },
    {
      image: 'https://picsum.photos/200/300',
      person_name: 'RodolfoVega',
      description: 'joined the group',
      group_name: 'Baraona Marshall y Cia',
      date: '1630489742',
      number_of_comments: '20',
    },
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'My Profile', value: 'My Profile'},
    {label: 'My Group', value: 'My Group'},
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'Everything', value: 'Everything'},
    {label: 'Updates', value: 'Updates'},
    {label: 'Group Memberships', value: 'Group Memberships'},
    {label: 'Group Updates', value: 'Group Updates'},
  ]);

  const renderPosts = ({item}) => {
    return <MyActivityView item={item} />;
  };

  return (
    <>
      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
        }}>
        {isLoading ? (
          <ContentLoader />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <DropDownPicker
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              // setItems={setItems2}
              placeholder={'Everything'}
              placeholderStyle={Styles.placeholderStyle}
              style={Styles.DropDownPicker2}
              dropDownContainerStyle={Styles.dropDownContainerStyle2}
              textStyle={Styles.textStyle}
              // labelStyle={Styles.labelStyle}
              arrowIconStyle={{tintColor: Colors.primary_color}}
            />

            <View style={Styles.view_whats_new}>
              <Image
                source={{uri: 'https://picsum.photos/200/300'}}
                style={Styles.view_whats_new_sub}
              />
              <Text style={Styles.text_whats_new}>What's New, PBVNetwork?</Text>
            </View>
            <TextInput
              value={searchText}
              onChangeText={text => {
                setSearchText(text);
              }}
              multiline={true}
              style={Styles.TextInput}
            />

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                height: 40,
                // borderWidth: 1,
              }}>
              <View style={{flex: 1}}></View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  // navigation.navigate(label);
                }}
                style={{
                  borderRadius: 7,
                  backgroundColor: Colors.light_primary_color,
                  marginLeft: -120,
                  justifyContent: 'center',
                  height: 30,
                }}>
                <Text
                  style={{
                    color: Colors.primary_color,
                    fontSize: 12,
                    marginHorizontal: 15,
                    marginVertical: 5,
                    fontWeight: '500',
                    fontFamily: Fonts.Regular_font,
                  }}>
                  POST UPDATE
                </Text>
              </TouchableOpacity>
            </View>
            {route.params.from_group ? null : (
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                // setItems={setItems}
                placeholder={'Post in'}
                placeholderStyle={Styles.placeholderStyle}
                style={Styles.DropDownPicker}
                dropDownContainerStyle={Styles.dropDownContainerStyle}
                textStyle={Styles.textStyle}
                // labelStyle={Styles.labelStyle}
                arrowIconStyle={{tintColor: Colors.primary_color}}
              />
            )}
            <FlatList
              style={{marginVertical: 15}}
              showsVerticalScrollIndicator={false}
              data={posts}
              renderItem={renderPosts}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        )}
      </View>
    </>
  );
};
export default UserActivities;
