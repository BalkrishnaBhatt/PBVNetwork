import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useContext,
  useRef,
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  AppState,
  Modal,
  Platform,
  ImageBackground,
  Alert,
  ToastAndroid,
  Switch,
  Share,
  TextInput,
} from 'react-native';
import Common_styles from '../../utils/commonStyle';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import CustomTextInput from '../../components/CustomTextInput';
import {
  LoginTopCurve,
  LoginBottomCurve,
  NextRoundArrowSymbol,
} from '../../utils/svg';
import Images from '../../utils/images';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import {console_log} from '../../utils/loggers';
import Styles from './style';
import {NAVIGATION} from '../../constant';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const MyActivities = ({navigation, route}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

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
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          // height: screen_height,
          // width: screen_width,
        }}>
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
                }}>
                Latest
                <Text style={{color: Colors.primary_color}}> News</Text>
              </Text>
            </View>
          )}
          <FlatList
            style={{marginVertical: 15, marginHorizontal: 20, marginBottom: 50}}
            showsVerticalScrollIndicator={false}
            data={newsList}
            renderItem={renderNews}
            ItemSeparatorComponent={() => (
              <View style={{backgroundColor: Colors.border_color, height: 1}} />
            )}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    </>
  );
};
export default MyActivities;
