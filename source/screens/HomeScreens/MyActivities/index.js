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
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import {
  DownArrowSymbol,
  FavouriteSymbol,
  CommentsSymbol,
  DeleteSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {Fonts} from '../../../utils/fonts';

import DropDownPicker from 'react-native-dropdown-picker';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const MyActivities = ({navigation, route}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [searchText, setSearchText] = useState('');
  const [newsCategory, setNewsCategory] = useState([
    {
      news_category: 'LATEST NEWS',
    },
    {
      news_category: 'ENTERTAINMENT',
    },
    {
      news_category: 'CLIMATE',
    },
  ]);
  const [newsList, setNewsList] = useState([
    {
      news_title:
        'Telereal Trillium’s £7.9 Million Acquisition of Marlborough House',
      news_details:
        'Reed Smith has advised Telereal Trillium on the deal. Telereal Trillium, one of ...',
    },
    {
      news_title: 'Sonoma Pharmaceuticals’ $6 Million At-The-Market Offering',
      news_details: '',
    },
    {
      news_title: 'Magna International’s Acquisition of Venoeer',
      news_details: '',
    },
  ]);
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

  const renderPosts = ({item}) => {
    return (
      <TouchableOpacity
        style={Styles.view_flatlist_main}
        activeOpacity={0.8}
        onPress={() => {}}>
        <Image
          source={{uri: item.image}}
          resizeMode="cover"
          style={{height: 25, width: 25, borderRadius: 9}}
        />
        <View
          style={{
            marginHorizontal: 8,
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              fontFamily: Fonts.Regular_font,
            }}>
            {item.person_name}{' '}
            <Text style={{fontSize: 12, fontWeight: '400'}}>
              {item.description}
            </Text>{' '}
            {item.group_name}
          </Text>
          <Text
            style={{
              fontSize: 8,
              fontFamily: Fonts.Regular_font,
              color: Colors.border_color,
              marginVertical: 15,
            }}>
            3 hours, 39 minutes ago
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={[
                Styles.view_flatlist_comment_favourite,
                {
                  backgroundColor: Colors.grey,
                },
              ]}>
              <CommentsSymbol style={Styles.CommentsSymbol} />
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: Fonts.Regular_font,
                  marginVertical: 5,
                }}>
                Comment({item.number_of_comments})
              </Text>
            </View>
            <View
              style={[
                Styles.view_flatlist_comment_favourite,
                {
                  backgroundColor: Colors.light_primary_color,
                },
              ]}>
              <FavouriteSymbol style={Styles.CommentsSymbol} />
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: Fonts.Regular_font,
                  color: Colors.primary_color,
                }}>
                Favourite
              </Text>
            </View>
            <View
              style={[
                Styles.view_flatlist_comment_favourite,
                {
                  backgroundColor: Colors.light_red,
                },
              ]}>
              <DeleteSymbol style={Styles.CommentsSymbol} />
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: Fonts.Regular_font,
                  color: Colors.red,
                }}>
                Delete
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderNewsCategoy = ({item}) => {
    return (
      <View
        style={Styles.view_flatlist_main_news}
        source={{uri: 'https://picsum.photos/200/300'}}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            borderRadius: 15,
          }}
          source={{uri: 'https://picsum.photos/200/300'}}
        />
        <Text
          style={{
            fontSize: 14,
            color: Colors.white,
            fontFamily: Fonts.Regular_font,
            fontWeight: '600',
          }}>
          {item.news_category}
        </Text>
      </View>
    );
  };
  const renderNews = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          // borderBottomWidth: 1,
          // borderColor: Colors.grey,
          paddingVertical: 15,
        }}
        activeOpacity={0.8}
        onPress={() => {}}>
        <Text
          style={{
            fontSize: 14,
            color: Colors.grey,
            marginBottom: 5,
            fontFamily: Fonts.Regular_font,
            fontWeight: '300',
          }}>
          News
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: Colors.black,
            fontFamily: Fonts.Regular_font,
            fontWeight: '300',
          }}>
          {item.news_title}
        </Text>
      </TouchableOpacity>
    );
  };
  // const password_ref = useRef(null);
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          // height: screen_height,
          // width: screen_width,
          // marginHorizontal: 20,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {route.params.from_group ? (
            // <TouchableOpacity
            //   activeOpacity={0.8}
            //   onPress={() => {
            //     // navigation.navigate(label);
            //   }}
            //   style={[
            //     Styles.view_post_in,
            //     {alignSelf: 'flex-end', marginHorizontal: 20, marginBottom: 10},
            //   ]}>
            //   <Text style={Styles.text_post_in}>Show</Text>
            //   <DownArrowSymbol
            //     style={Styles.DownArrowSymbol}
            //     fill={Colors.primary_color}></DownArrowSymbol>
            // </TouchableOpacity>
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
          ) : null}
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
            // <TouchableOpacity
            //   activeOpacity={0.8}
            //   onPress={() => {
            //     // navigation.navigate(label);
            //   }}
            //   style={Styles.view_post_in}>
            //   <Text style={Styles.text_post_in}>Post in</Text>
            //   <DownArrowSymbol
            //     style={Styles.DownArrowSymbol}
            //     fill={Colors.primary_color}></DownArrowSymbol>
            // </TouchableOpacity>
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
          {route.params.from_group ? null : (
            <>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  // navigation.navigate(label);
                }}
                style={Styles.view_load_more}>
                <Text style={Styles.text_load_more}>LOAD MORE</Text>
              </TouchableOpacity>
              <View style={Styles.view_featured_news}>
                <Text style={Styles.text_featured_news}>Featured News</Text>
              </View>
              <FlatList
                style={{marginVertical: 5, marginLeft: 20}}
                showsVerticalScrollIndicator={false}
                data={newsCategory}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderNewsCategoy}
                keyExtractor={item => item.id}
              />
              <FlatList
                style={{
                  marginVertical: 15,
                  marginHorizontal: 20,
                  marginBottom: 50,
                }}
                showsVerticalScrollIndicator={false}
                data={newsList}
                renderItem={renderNews}
                ItemSeparatorComponent={() => (
                  <View
                    style={{backgroundColor: Colors.border_color, height: 1}}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </>
          )}
        </ScrollView>
      </View>
    </>
  );
};
export default MyActivities;
