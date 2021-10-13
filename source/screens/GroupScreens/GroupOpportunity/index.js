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
import {NAVIGATION} from '../../../constant';
import {Fonts} from '../../../utils/fonts';
import {
  MyActivityView,
  NewsView,
  ContentLoader,
  CustomSafeAreaView,
  OpportunityView,
} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';
import {
  getHomeActivities,
  getHomeNews,
  setLoader,
} from '../../../redux/actions';

import DropDownPicker from 'react-native-dropdown-picker';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const GroupOpportunity = ({navigation, route}) => {
  const dispatch = useDispatch();
  let HomeReducer = useSelector(state => state.HomeReducer);
  useEffect(() => {
    if (HomeReducer) {
      // setPosts(HomeReducer.homeActivities);
      setIsLoading(HomeReducer.isLoading);
      // setNewsList(HomeReducer.homeNews);
    }
    // else {
    //   setPosts([]);
    // }
  }, [HomeReducer]);
  useEffect(() => {
    dispatch(getHomeActivities());
    dispatch(getHomeNews());
    // setTimeout(() => {
    //   dispatch(setLoader(false));
    // }, 6000);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const [searchText, setSearchText] = useState('');
  const [peronsList, setPeronsList] = useState([
    {
      title: 'Start Opportunity',
      person_name: 'Latham & Watkins',
      profile_image: 'https://picsum.photos/200/300',
      description:
        'This is just testing opportunity created. Which will show on the opportunity page in group and user dashboard as well.',
      date: '2020-10-31',
      jurisdiction: 'UNITED ARAB EMIRATES',
      town: 'Nottingham',
    },
    {
      title: 'Start Opportunity',
      person_name: 'White & Case',
      profile_image: 'https://picsum.photos/200/300',
      description:
        'This is just testing opportunity created. Which will show on the opportunity page in group and user dashboard as well.',
      date: '2020-10-31',
      jurisdiction: 'UNITED ARAB EMIRATES',
      town: 'Nottingham',
    },
    {
      title: 'Start Opportunity',
      person_name: 'Baker McKenzie',
      profile_image: 'https://picsum.photos/200/300',
      description:
        'This is just testing opportunity created. Which will show on the opportunity page in group and user dashboard as well.',
      date: '2020-10-31',
      jurisdiction: 'UNITED ARAB EMIRATES',
      town: 'Nottingham',
    },
    {
      title: 'Start Opportunity',
      person_name: 'Simpson Thacher & Bartlett',
      profile_image: 'https://picsum.photos/200/300',
      description:
        'This is just testing opportunity created. Which will show on the opportunity page in group and user dashboard as well.',
      date: '2020-10-31',
      jurisdiction: 'UNITED ARAB EMIRATES',
      town: 'Nottingham',
    },
    {
      title: 'Start Opportunity',
      person_name: 'Clifford Chance',
      profile_image: 'https://picsum.photos/200/300',
      description:
        'This is just testing opportunity created. Which will show on the opportunity page in group and user dashboard as well.',
      date: '2020-10-31',
      jurisdiction: 'UNITED ARAB EMIRATES',
      town: 'Nottingham',
    },
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'NEWEST', value: 'NEWEST'},
    {label: 'ACTIVE', value: 'ACTIVE'},
    {label: 'POPULAR', value: 'POPULAR'},
    {label: 'ALPHABETICAL', value: 'ALPHABETICAL'},
  ]);
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
              style={{
                marginVertical: 15,
                marginHorizontal: 20,
                marginBottom: 50,
              }}
              showsVerticalScrollIndicator={false}
              data={peronsList}
              renderItem={renderPersons}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        )}
      </View>
    </>
  );
};
export default GroupOpportunity;
