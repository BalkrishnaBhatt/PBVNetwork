import React, {useState, useEffect} from 'react';
import {ScrollView, View, Dimensions, FlatList, TextInput} from 'react-native';
import {SearchSymbol} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {ContentLoader, OpportunityView, EmptyList} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';
import {getUserOpportunity} from '../../../redux/actions';
import axiosInstance from '../../../axios';
import {console_log} from '../../../utils/loggers';
import {Store} from '../../../redux/store';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const UserOpportunity = ({navigation, route}) => {
  const dispatch = useDispatch();
  // let UserReducer = useSelector(state => state.UserReducer);
  // useEffect(() => {
  //   if (UserReducer) {
  //     setPeronsList(UserReducer.userOpportunity);
  //     setIsLoading(UserReducer.isLoading);
  //     // setNewsList(UserReducer.homeNews);
  //   }
  // }, [UserReducer]);
  useEffect(() => {
    // dispatch(getUserOpportunity(navigation));
    getNewOpportunities();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const [searchText, setSearchText] = useState('');
  const [opportunityList, setOpportunityList] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'NEWEST', value: 'NEWEST'},
  //   {label: 'ACTIVE', value: 'ACTIVE'},
  //   {label: 'POPULAR', value: 'POPULAR'},
  //   {label: 'ALPHABETICAL', value: 'ALPHABETICAL'},
  // ]);

  const user_id = Store.getState().AuthenticationReducer.userId;
  const currentTab = route.params.currentTab;
  const getNewOpportunities = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url =
      currentTab == 1
        ? 'new_opportunities'
        : currentTab == 2
        ? 'my_job_openings'
        : currentTab == 3
        ? 'saved_opportunities'
        : 'applied_opportunities';
    let url_2 = '?userid=' + user_id;
    axiosInstance
      .get('pbv/v1/' + url + url_2, {}, config)
      .then(async response => {
        console_log(
          `getNewOpportunities response: ${currentTab} :`,
          JSON.stringify(response, null, 2),
        );
        let data = response.data.data;
        setOpportunityList(data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console_log(
          'getNewOpportunities error: ',
          JSON.stringify(error, null, 2),
        );
        setIsLoading(false);
      });
  };
  const renderPersons = ({item}) => {
    return (
      <OpportunityView
        item={item}
        currentTab={currentTab}
        refreshOpportunity={() => {
          getNewOpportunities();
        }}
      />
    );
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
          <ScrollView>
            {/* <View style={Styles.view_search}>
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
            </View> */}
            {/* <DropDownPicker
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
            /> */}
            <FlatList
              style={{
                marginVertical: 15,
                marginHorizontal: 20,
                marginBottom: 50,
              }}
              showsVerticalScrollIndicator={false}
              data={opportunityList}
              renderItem={renderPersons}
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
export default UserOpportunity;
