import React, {useState, useEffect} from 'react';
import {ScrollView, View, Dimensions, FlatList, TextInput} from 'react-native';
import {SearchSymbol} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {ContentLoader, OpportunityView, EmptyList} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';
import {getUserOpportunity} from '../../../redux/actions';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const UserOpportunity = ({navigation, route}) => {
  const dispatch = useDispatch();
  let UserReducer = useSelector(state => state.UserReducer);
  useEffect(() => {
    if (UserReducer) {
      setPeronsList(UserReducer.userOpportunity);
      setIsLoading(UserReducer.isLoading);
      // setNewsList(UserReducer.homeNews);
    }
  }, [UserReducer]);
  useEffect(() => {
    dispatch(getUserOpportunity(navigation));
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const [searchText, setSearchText] = useState('');
  const [peronsList, setPeronsList] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'NEWEST', value: 'NEWEST'},
  //   {label: 'ACTIVE', value: 'ACTIVE'},
  //   {label: 'POPULAR', value: 'POPULAR'},
  //   {label: 'ALPHABETICAL', value: 'ALPHABETICAL'},
  // ]);
  const renderPersons = ({item}) => {
    return <OpportunityView item={item} />;
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
              data={peronsList}
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
