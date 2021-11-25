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
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import CustomHeader from '../../../components/CustomHeader';
import {SearchSymbol} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {useSelector, useDispatch} from 'react-redux';
import {console_log} from '../../../utils/loggers';
import {
  getAllGroups,
  getMyGroups,
  getGroupDetails,
} from '../../../redux/actions';
import {ContentLoader, EmptyList} from '../../../components';
import DropDownPicker from 'react-native-dropdown-picker';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Groups = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const dispatch = useDispatch();
  let GroupReducer = useSelector(state => state.GroupReducer);
  useEffect(() => {
    if (GroupReducer) {
      setAllGroups(GroupReducer.allGroups);
      // console.log('GroupReducer.allGroups: ', GroupReducer.allGroups.length);
      setMyGroups(GroupReducer.myGroups);
      // console.log('GroupReducer.myGroups: ', GroupReducer.myGroups.length);
      setIsLoading(GroupReducer.isLoading);
    }
  }, [GroupReducer]);
  // useEffect(() => {
  //   if (GroupReducer) {
  //     setAllGroups(GroupReducer.allGroups);
  //     console.log('GroupReducer.allGroups: ', GroupReducer.allGroups.length);
  //     setIsLoading(GroupReducer.isLoading);
  //   }
  // }, [GroupReducer.allGroups]);
  // useEffect(() => {
  //   if (GroupReducer) {
  //     setMyGroups(GroupReducer.myGroups);
  //     console.log('GroupReducer.myGroups: ', GroupReducer.myGroups.length);
  //     setIsLoading(GroupReducer.isLoading);
  //   }
  // }, [GroupReducer.myGroups]);
  useEffect(() => {
    dispatch(getMyGroups(navigation, value));
    setTimeout(() => {
      dispatch(getAllGroups(navigation, value));
    }, 500);
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [allGroupSelected, setAllGroupSelected] = useState(true);
  const [numberOfColumns, setNumberOfColumns] = useState(2);

  const [allGroups, setAllGroups] = useState([]);
  const [myGroups, setMyGroups] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Last Active', value: 'Last Active'},
    {label: 'Most Members', value: 'Most Members'},
    {label: 'Newly Created', value: 'Newly Created'},
    {label: 'Alphabetical', value: 'Alphabetical'},
  ]);
  useEffect(async () => {
    decideNumberOfColumns(screen_width);
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      console_log('device rotaated', width, height);
      decideNumberOfColumns(width);
    });
    return () => Dimensions.removeEventListener();
  }, []);
  const decideNumberOfColumns = width => {
    let number_of_columns = Math.floor(width / 180);
    setNumberOfColumns(number_of_columns);
  };
  const renderPersons = ({item}) => {
    return (
      // <GroupListView
      //   item={item}
      //   numberOfColumns={Number(numberOfColumns)}
      //   {...props}
      // />
      <TouchableOpacity
        style={{
          backgroundColor: Colors.white,
          borderRadius: 15,
          padding: 10,
          margin: 4,

          shadowColor: Colors.black,
          shadowOffset: {width: 2, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 4,
          width: screen_width / numberOfColumns - 25,
        }}
        activeOpacity={0.8}
        onPress={() => {
          dispatch(getGroupDetails(navigation, item.id));
          navigation.navigate(NAVIGATION.GROUP_DETAIL);
        }}>
        <Image
          source={{uri: item.avatar_urls.full}}
          resizeMode="cover"
          style={{height: 150, borderRadius: 10, margin: -10}}
        />
        <Text
          style={{
            fontSize: 14,
            color: Colors.primary_color,
            marginBottom: 5,
            fontWeight: '400',
            marginTop: 20,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: Colors.border_color,
          }}>
          <Text style={{color: '#00C620'}}>Active</Text> {item.created_since}
        </Text>
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
          <Text style={Styles.text_home}>Groups</Text>
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
          <View
            style={{
              flexDirection: 'row',
              margin: 20,
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={[
                Styles.view_selected_header,
                {
                  backgroundColor: allGroupSelected
                    ? Colors.primary_color
                    : null,
                  marginRight: -15,
                },
              ]}
              activeOpacity={0.8}
              onPress={() => {
                setAllGroupSelected(true);
                dispatch(getAllGroups(navigation, value));
              }}>
              <Text
                style={[
                  Styles.text_header_selected,
                  {
                    color: allGroupSelected
                      ? Colors.white
                      : Colors.primary_color,
                  },
                ]}>
                All Groups({allGroups.length})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Styles.view_selected_header,
                {
                  backgroundColor: !allGroupSelected
                    ? Colors.primary_color
                    : null,
                },
              ]}
              activeOpacity={0.8}
              onPress={() => {
                setAllGroupSelected(false);
                dispatch(getMyGroups(navigation, value));
                setTimeout(() => {
                  dispatch(getAllGroups(navigation, value));
                }, 500);
              }}>
              <Text
                style={[
                  Styles.text_header_selected,
                  {
                    color: !allGroupSelected
                      ? Colors.white
                      : Colors.primary_color,
                  },
                ]}>
                My Groups({myGroups.length})
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              // flexDirection: 'row',
              // elevation: 5,
            }}>
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
              onChangeValue={value => {
                // console.log('dropdonvalw: ', value);
                allGroupSelected
                  ? dispatch(getAllGroups(navigation, value))
                  : dispatch(getMyGroups(navigation, value));
              }}
              textStyle={Styles.textStyle}
              // labelStyle={Styles.labelStyle}
              arrowIconStyle={{tintColor: Colors.primary_color}}
            />
            {isLoading ? (
              <ContentLoader />
            ) : (
              <FlatList
                style={{
                  marginVertical: 15,
                  marginHorizontal: 16,
                  marginBottom: 150,
                  elevation: 0,
                }}
                showsVerticalScrollIndicator={false}
                data={allGroupSelected ? allGroups : myGroups}
                numColumns={numberOfColumns}
                key={numberOfColumns}
                renderItem={renderPersons}
                keyExtractor={item => item.id}
                ListEmptyComponent={() => {
                  return <EmptyList />;
                }}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default Groups;
