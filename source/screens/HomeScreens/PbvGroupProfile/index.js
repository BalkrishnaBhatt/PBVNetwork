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
import {DownArrowSymbol} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {Fonts} from '../../../utils/fonts';
import {useSelector, useDispatch} from 'react-redux';
import {console_log} from '../../../utils/loggers';
import {
  getAllGroups,
  getMyGroups,
  getGroupDetails,
} from '../../../redux/actions';
import {
  ContentLoader,
  GroupListView,
  EmptyList,
  CustomSafeAreaView,
} from '../../../components';

import DropDownPicker from 'react-native-dropdown-picker';
import {NAVIGATION} from '../../../constant';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const PbvGroupProfile = ({navigation, route}) => {
  const dispatch = useDispatch();
  let GroupReducer = useSelector(state => state.GroupReducer);
  useEffect(() => {
    if (GroupReducer) {
      setPeronsList(GroupReducer.allGroups.splice(0, 5));
      setIsLoading(GroupReducer.isLoading);
    }
    // else {
    //   setPosts([]);
    // }
  }, [GroupReducer]);
  useEffect(() => {
    dispatch(getAllGroups(navigation, value));
    dispatch(getMyGroups(navigation));
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [peronsList, setPeronsList] = useState([
    // {
    //   person_name: 'Latham & Watkins',
    //   profile_image: 'https://picsum.photos/200/300',
    //   number_of_members: '302',
    // },
    // {
    //   person_name: 'White & Case',
    //   profile_image: 'https://picsum.photos/200/300',
    //   number_of_members: '289',
    // },
    // {
    //   person_name: 'Baker McKenzie',
    //   profile_image: 'https://picsum.photos/200/300',
    //   number_of_members: '324',
    // },
    // {
    //   person_name: 'Simpson Thacher & Bartlett',
    //   profile_image: 'https://picsum.photos/200/300',
    //   number_of_members: '488',
    // },
    // {
    //   person_name: 'Clifford Chance',
    //   profile_image: 'https://picsum.photos/200/300',
    //   number_of_members: '526',
    // },
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Last Active', value: 'Last Active'},
    {label: 'Most Members', value: 'Most Members'},
    {label: 'Newly Created', value: 'Newly Created'},
    {label: 'Alphabetical', value: 'Alphabetical'},
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
        onPress={() => {
          navigation.navigate(NAVIGATION.GROUP_DETAIL);
        }}>
        <Image
          source={{uri: item.avatar_urls.thumb}}
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
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 8,
              color: Colors.primary_color,
              fontFamily: Fonts.Regular_font,
              fontWeight: '300',
            }}>
            {item.total_member_count !== null && item.total_member_count !== ''
              ? item.total_member_count
              : 0}{' '}
            members
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
          <View>
            <View
              style={{
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: Colors.border_color,
                paddingHorizontal: 20,
                paddingVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                height: 45,
                // position: 'absolute',
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
            </View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              // setItems={setItems}
              placeholder={'Sort'}
              placeholderStyle={Styles.placeholderStyle}
              style={Styles.DropDownPicker}
              dropDownContainerStyle={Styles.dropDownContainerStyle}
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
                  marginHorizontal: 20,
                  marginBottom: 50,
                  // marginTop: 70,
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
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default PbvGroupProfile;
