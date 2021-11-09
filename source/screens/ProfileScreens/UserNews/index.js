import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {Fonts} from '../../../utils/fonts';
import {useSelector, useDispatch} from 'react-redux';
import {getUserNews} from '../../../redux/actions';

import {ContentLoader, EmptyList, GroupNewsView} from '../../../components';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const UserNews = ({navigation, route}) => {
  const dispatch = useDispatch();
  let UserReducer = useSelector(state => state.UserReducer);
  useEffect(() => {
    if (UserReducer) {
      setIsLoading(UserReducer.isLoading);
      setNewsList(UserReducer.userNews);
    }
  }, [UserReducer]);
  useEffect(() => {
    dispatch(getUserNews(navigation));
  }, []);

  const [isLoading, setIsLoading] = useState(true);
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
    // {
    //   news_title:
    //     'Telereal Trillium’s £7.9 Million Acquisition of Marlborough House',
    //   news_details:
    //     'Reed Smith has advised Telereal Trillium on the deal. Telereal Trillium, one of ...',
    // },
    // {
    //   news_title: 'Sonoma Pharmaceuticals’ $6 Million At-The-Market Offering',
    //   news_details: '',
    // },
    // {
    //   news_title: 'Magna International’s Acquisition of Venoeer',
    //   news_details: '',
    // },
  ]);
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'My Profile', value: 'My Profile'},
  //   {label: 'My Group', value: 'My Group'},
  // ]);
  // const [open2, setOpen2] = useState(false);
  // const [value2, setValue2] = useState(null);
  // const [items2, setItems2] = useState([
  //   {label: 'Everything', value: 'Everything'},
  //   {label: 'Updates', value: 'Updates'},
  //   {label: 'Group Memberships', value: 'Group Memberships'},
  //   {label: 'Group Updates', value: 'Group Updates'},
  // ]);

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
    return <GroupNewsView item={item} />;
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
            {/* <FlatList
              style={{marginVertical: 5, marginLeft: 20}}
              showsVerticalScrollIndicator={false}
              data={newsCategory}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderNewsCategoy}
              keyExtractor={item => item.id}
            /> */}
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
              ListEmptyComponent={() => {
                return <EmptyList />;
              }}
            />
          </ScrollView>
        )}
      </View>
    </>
  );
};
export default UserNews;
