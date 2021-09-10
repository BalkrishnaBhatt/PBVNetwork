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
import CustomHeader from '../../components/CustomHeader';
import {
  LoginTopCurve,
  LoginBottomCurve,
  NextRoundArrowSymbol,
  DownArrowSymbol,
  SearchSymbol,
} from '../../utils/svg';
import Images from '../../utils/images';
import {Colors} from '../../utils/colors';
import {console_log} from '../../utils/loggers';
import Styles from './style';
import {NAVIGATION} from '../../constant';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Members = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [searchText, setSearchText] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [jurisdictionContains, setJurisdictionContains] = useState('');
  const [townContains, setTownContains] = useState('');
  const [peronsList, setPeronsList] = useState([
    {
      person_name: 'Latham & Watkins',
      profile_image: 'https://picsum.photos/200/300',
      days_ago: '3',
    },
    {
      person_name: 'White & Case',
      profile_image: 'https://picsum.photos/200/300',
      days_ago: '4',
    },
    {
      person_name: 'Baker McKenzie',
      profile_image: 'https://picsum.photos/200/300',
      days_ago: '2',
    },
    {
      person_name: 'Simpson Thacher & Bartlett',
      profile_image: 'https://picsum.photos/200/300',
      days_ago: '3',
    },
    {
      person_name: 'Clifford Chance',
      profile_image: 'https://picsum.photos/200/300',
      days_ago: '3',
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
          padding: 10,
          marginBottom: 5,
        }}
        activeOpacity={0.8}
        onPress={() => {}}>
        <Image
          source={{uri: item.profile_image}}
          resizeMode="cover"
          style={{height: 40, width: 40, borderRadius: 10}}
        />
        <View style={{paddingLeft: 5}}>
          <Text style={{fontSize: 16, color: Colors.black, marginBottom: 5}}>
            {item.person_name}
          </Text>
          <Text style={{fontSize: 8, color: Colors.primary_color}}>
            {item.days_ago} days ago
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomHeader navigation={navigation} {...props}></CustomHeader>
          <Text style={Styles.text_home}>Members</Text>
          <View style={Styles.view_search}>
            <SearchSymbol style={Styles.SearchSymbol}></SearchSymbol>
            <TextInput
              value={searchText}
              onChangeText={text => {
                setSearchText(text);
              }}
              placeholder="Search"
              // multiline={true}
            />
          </View>
          <View style={Styles.view_search_member}>
            <Text style={Styles.text_search_member}>Search Member</Text>
            <TextInput
              value={userEmail}
              onChangeText={text => {
                setUserEmail(text);
              }}
              placeholder="User email contains"
              style={Styles.TextInput_search_member}
            />
            <TextInput
              value={jurisdictionContains}
              onChangeText={text => {
                setJurisdictionContains(text);
              }}
              placeholder="Jurisdiction contains"
              style={Styles.TextInput_search_member}
            />
            <TextInput
              value={townContains}
              onChangeText={text => {
                setTownContains(text);
              }}
              placeholder="Town contains"
              style={Styles.TextInput_search_member}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // navigation.navigate(label);
              }}
              style={Styles.view_load_more}>
              <Text style={Styles.text_load_more}>SEARCH</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderColor: Colors.border_color,
              paddingHorizontal: 20,
              paddingVertical: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              All
              <Text style={{color: Colors.primary_color}}> Members</Text>
            </Text>
            <View style={{flex: 1}} />
            <TouchableOpacity
              style={Styles.view_sort}
              activeOpacity={0.8}
              onPress={() => {}}>
              <Text style={Styles.text_sort}>Order by</Text>
              <DownArrowSymbol
                fill={Colors.primary_color}
                style={Styles.DownArrowSymbol}></DownArrowSymbol>
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
export default Members;
