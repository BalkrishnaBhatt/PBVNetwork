import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  BackHandler,
  FlatList,
} from 'react-native';
import {
  HomeTabSymbol,
  NewsTabSymbol,
  MemberTabSymbol,
  ChartTabSymbol,
  ManageTabSymbol,
  PowerButtonSymbol,
  SearchSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Fonts} from '../../../utils/fonts';
import {useSelector, useDispatch} from 'react-redux';
import {
  getHomeActivities,
  getHomeNews,
  setLoader,
  getGroupNews,
  getGroupMembers,
} from '../../../redux/actions';
import {
  MyActivityView,
  NewsView,
  ContentLoader,
  CustomSafeAreaView,
  GroupNewsView,
  EmptyList,
  MemberView,
} from '../../../components';
import moment from 'moment';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const ManageMembers = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  let GroupDetailReducer = useSelector(state => state.GroupDetailReducer);
  useEffect(() => {
    if (GroupDetailReducer) {
      setIsLoading(GroupDetailReducer.isLoading);
      setPeronsList(GroupDetailReducer.groupMembers);
    }
  }, [GroupDetailReducer]);
  useEffect(() => {
    dispatch(getGroupMembers(navigation));
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [peronsList, setPeronsList] = useState([
    // {
    //   person_name: 'Latham',
    //   profile_image: 'https://picsum.photos/200/300',
    //   joined: '2 hours, 27 minutes ago',
    // },
    // {
    //   person_name: 'White',
    //   profile_image: 'https://picsum.photos/200/300',
    //   joined: '1 day, 3 hours ago',
    // },
  ]);
  const renderPersons = ({item}) => {
    return <MemberView item={item} />;
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
        <ScrollView>
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

          {isLoading ? (
            <ContentLoader />
          ) : (
            <FlatList
              style={{
                marginVertical: 15,
                marginHorizontal: 20,
                marginBottom: 50,
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
export default ManageMembers;
