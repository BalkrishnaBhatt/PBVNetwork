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
  DownArrowSymbol,
} from '../../utils/svg';
import Images from '../../utils/images';
import {Colors} from '../../utils/colors';
import {console_log} from '../../utils/loggers';
import Styles from './style';
import {NAVIGATION} from '../../constant';
import {Fonts} from '../../utils/fonts';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const MyActivities = ({navigation, route}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [peronsList, setPeronsList] = useState([
    {
      person_name: 'Latham & Watkins',
      profile_image: 'https://picsum.photos/200/300',
      number_of_members: '302',
    },
    {
      person_name: 'White & Case',
      profile_image: 'https://picsum.photos/200/300',
      number_of_members: '289',
    },
    {
      person_name: 'Baker McKenzie',
      profile_image: 'https://picsum.photos/200/300',
      number_of_members: '324',
    },
    {
      person_name: 'Simpson Thacher & Bartlett',
      profile_image: 'https://picsum.photos/200/300',
      number_of_members: '488',
    },
    {
      person_name: 'Clifford Chance',
      profile_image: 'https://picsum.photos/200/300',
      number_of_members: '526',
    },
  ]);
  const renderPersons = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          // borderBottomWidth: 1,
          // borderColor: Colors.grey,
          // paddingVertical: 15,
          flexDirection: 'row',
          backgroundColor: Colors.light_primary_color,
          borderRadius: 15,
          paddingHorizontal: 10,
          paddingTop: 10,
          marginBottom: 10,
        }}
        activeOpacity={0.8}
        onPress={() => {}}>
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
              marginBottom: 5,
              fontFamily: Fonts.Regular_font,
              fontWeight: '300',
            }}>
            {item.person_name}
          </Text>
          <Text
            style={{
              fontSize: 8,
              color: Colors.primary_color,
              fontFamily: Fonts.Regular_font,
              fontWeight: '300',
            }}>
            {item.number_of_members} members
          </Text>
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
          <View
            style={{
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderColor: Colors.border_color,
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                fontFamily: Fonts.Regular_font,
              }}>
              PBV Group
              <Text style={{color: Colors.primary_color}}> Profile</Text>
            </Text>
            <View style={{flex: 1}} />
            <TouchableOpacity
              style={Styles.view_sort}
              activeOpacity={0.8}
              onPress={() => {}}>
              <Text style={Styles.text_sort}>Sort</Text>
              <DownArrowSymbol
                style={Styles.DownArrowSymbol}
                fill={Colors.primary_color}></DownArrowSymbol>
            </TouchableOpacity>
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
export default MyActivities;
