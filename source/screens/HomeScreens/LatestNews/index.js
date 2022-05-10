import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {useSelector, useDispatch} from 'react-redux';
import {loginSave, getHomeNews} from '../../../redux/actions';
import {
  MyActivityView,
  NewsView,
  ContentLoader,
  CustomSafeAreaView,
  EmptyList,
} from '../../../components';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const LatestNews = ({navigation, route}) => {
  const dispatch = useDispatch();
  let HomeReducer = useSelector(state => state.HomeReducer);
  useEffect(() => {
    if (HomeReducer) {
      setNewsList(HomeReducer.homeNews);
      setIsLoading(HomeReducer.isLoading);
    }
    // else {
    //   setPosts([]);
    // }
  }, [HomeReducer]);
  useEffect(() => {
    dispatch(getHomeNews());
  }, []);
  const [isLoading, setIsLoading] = useState(true);
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
  const renderNews = ({item}) => {
    return <NewsView item={item} />;
  };
  const renderNewsCategoy = ({item}) => {
    return (
      <View
        style={{
          height: 100,
          width: 200,
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
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
  return (
    <>
      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          // height: screen_height,
          // width: screen_width,
        }}>
        {isLoading ? (
          <ContentLoader />
        ) : (
          <ScrollView>
            {route.params.from_group ? (
              <FlatList
                style={{marginVertical: 5, marginLeft: 20}}
                showsVerticalScrollIndicator={false}
                data={newsCategory}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderNewsCategoy}
                keyExtractor={item => item.id}
              />
            ) : (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  borderColor: Colors.border_color,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    fontFamily: Fonts.Regular_font,
                    color: Colors.black,
                  }}>
                  Latest
                  <Text style={{color: Colors.primary_color}}> News</Text>
                </Text>
              </View>
            )}
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
export default LatestNews;
