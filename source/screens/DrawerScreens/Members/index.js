import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import {
  getAllMember,
  getJurisdictionList,
  getTownList,
} from '../../../redux/actions';
import {
  ContentLoader,
  CustomSafeAreaView,
  MemberView,
  CustomHeader,
  EmptyList,
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
  let InfoReducer = useSelector(state => state.InfoReducer);
  useEffect(() => {
    if (InfoReducer !== undefined) {
      setItemsJurisdiction(InfoReducer.jurisdictionList);
      setItemsTown(InfoReducer.townList);
    }
  }, [InfoReducer]);
  useEffect(() => {
    dispatch(
      getAllMember(navigation, value, searchText, valueJurisdiction, valueTown),
    );
    dispatch(getTownList(navigation));
    dispatch(getJurisdictionList(navigation));
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
  const [itemsJurisdiction, setItemsJurisdiction] = useState([]);
  const [itemsTown, setItemsTown] = useState([]);
  const [valueJurisdiction, setValueJurisdiction] = useState(null);
  const [valueTown, setValueTown] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Last Active', value: 'Last Active'},
    {label: 'Newest Registered', value: 'Newest Registered'},
    {label: 'Alphabetical', value: 'Alphabetical'},
  ]);
  const [isOpen, setIsOpen] = useState(0);
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
        <ScrollView showsVerticalScrollIndicator={false} style={{zIndex: 0}}>
          <CustomHeader navigation={navigation} {...props}></CustomHeader>
          <Text style={Styles.text_home}>Members</Text>
          {/* <View style={Styles.view_search}>
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
          </View> */}
          <View style={Styles.view_search_member}>
            <Text style={Styles.text_search_member}>Search Member</Text>
            <TextInput
              value={userEmail}
              onChangeText={text => {
                setUserEmail(text);
              }}
              // placeholder="User email contains"
              placeholder="Name"
              style={Styles.TextInput_search_member}
            />
            {/* <TextInput
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
            /> */}
            {/* <View style={{zIndex: 4, flex: 1}}> */}
            <DropDownPicker
              open={isOpen == 1}
              value={valueJurisdiction}
              items={itemsJurisdiction}
              setOpen={value => setIsOpen(value ? 1 : 0)}
              setValue={setValueJurisdiction}
              placeholder={'Jurisdiction'}
              listMode={'SCROLLVIEW'}
              placeholderStyle={Styles.placeholderStyle2}
              style={Styles.DropDownPicker2}
              dropDownContainerStyle={[
                Styles.dropDownContainerStyle2,
                {zindex: 3},
              ]}
              textStyle={Styles.textStyle2}
              // labelStyle={Styles.labelStyle}
              arrowIconStyle={{tintColor: Colors.border_color}}
            />
            <View style={{zIndex: 3}}>
              <DropDownPicker
                open={isOpen == 2}
                value={valueTown}
                items={itemsTown}
                setOpen={value => setIsOpen(value ? 2 : 0)}
                setValue={setValueTown}
                placeholder={'Town'}
                listMode={'SCROLLVIEW'}
                placeholderStyle={[Styles.placeholderStyle2, {zIndex: 1}]}
                style={Styles.DropDownPicker2}
                dropDownContainerStyle={Styles.dropDownContainerStyle2}
                textStyle={Styles.textStyle2}
                arrowIconStyle={{tintColor: Colors.border_color}}
              />
            </View>
            {/* </View> */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // navigation.navigate(label);
                // console.log('valueJurisdiction: ', valueJurisdiction);
                // console.log('valueTown: ', valueTown);
                dispatch(
                  getAllMember(
                    navigation,
                    value,
                    userEmail,
                    valueJurisdiction,
                    valueTown,
                  ),
                );
              }}
              style={Styles.view_load_more}>
              <Text style={Styles.text_load_more}>SEARCH</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // navigation.navigate(label);
                // console.log('valueJurisdiction: ', valueJurisdiction);
                // console.log('valueTown: ', valueTown);
                setValueJurisdiction(null);
                setValueTown(null);
                dispatch(getAllMember(navigation, value, '', null, null));
              }}
              style={[Styles.view_load_more, {marginVertical: 0}]}>
              <Text style={Styles.text_load_more}>Clear All</Text>
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
              height: 60,
            }}>
            <Text
              style={{fontWeight: 'bold', fontSize: 16, color: Colors.black}}>
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
            onChangeValue={value => {
              // console.log('dropdonvalw: ', value);
              dispatch(
                getAllMember(
                  navigation,
                  value,
                  userEmail,
                  valueJurisdiction,
                  valueTown,
                ),
              );
            }}
            arrowIconStyle={{tintColor: Colors.primary_color}}
          />
          {isLoading ? (
            <ContentLoader />
          ) : (
            <FlatList
              style={{
                marginVertical: 15,
                marginHorizontal: 20,
                marginBottom: 100,
              }}
              showsVerticalScrollIndicator={false}
              data={peronsList}
              renderItem={renderPersons}
              keyExtractor={item => item.id}
              ListEmptyComponent={() => {
                return <EmptyList />;
              }}
            />
          )}
        </ScrollView>
      </View>
    </>
  );
};
export default Members;
