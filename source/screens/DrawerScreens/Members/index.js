import React, {useState, useEffect} from 'react';
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
import {DownArrowSymbol, SearchSymbol} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {Fonts} from '../../../utils/fonts';
import {NAVIGATION} from '../../../constant';
import {useSelector, useDispatch} from 'react-redux';
import {
  getHomeActivities,
  getHomeNews,
  setLoader,
  getGroupNews,
  getGroupMembers,
  getAllMember,
} from '../../../redux/actions';
import {
  MyActivityView,
  NewsView,
  ContentLoader,
  CustomSafeAreaView,
  GroupNewsView,
  EmptyList,
  MemberView,
  CustomHeader,
} from '../../../components';

import DropDownPicker from 'react-native-dropdown-picker';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Members = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  let MemberReducer = useSelector(state => state.MemberReducer);
  useEffect(() => {
    if (MemberReducer) {
      setIsLoading(MemberReducer.isLoading);
      setPeronsList(MemberReducer.allMembers);
    }
  }, [MemberReducer]);
  useEffect(() => {
    dispatch(getAllMember(navigation));
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const [searchText, setSearchText] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [jurisdictionContains, setJurisdictionContains] = useState('');
  const [townContains, setTownContains] = useState('');
  const [peronsList, setPeronsList] = useState([
    // {
    //   person_name: 'Latham & Watkins',
    //   profile_image: 'https://picsum.photos/200/300',
    //   days_ago: '3',
    // },
    // {
    //   person_name: 'White & Case',
    //   profile_image: 'https://picsum.photos/200/300',
    //   days_ago: '4',
    // },
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Last Active', value: 'Last Active'},
    {label: 'Newest Registered', value: 'Newest Registered'},
    {label: 'Alphabetical', value: 'Alphabetical'},
  ]);
  const renderPersons = ({item}) => {
    return <MemberView item={item} />;
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
              style={{
                flex: 1,
                fontFamily: Fonts.Regular_font,
                // height: 40,
              }}
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
              height: 45,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              All
              <Text style={{color: Colors.primary_color}}> Members</Text>
            </Text>
          </View>

          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            // setItems={setItems}
            placeholder={'Order by'}
            placeholderStyle={Styles.placeholderStyle}
            style={Styles.DropDownPicker}
            dropDownContainerStyle={Styles.dropDownContainerStyle}
            textStyle={Styles.textStyle}
            // labelStyle={Styles.labelStyle}
            arrowIconStyle={{tintColor: Colors.primary_color}}
          />
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
