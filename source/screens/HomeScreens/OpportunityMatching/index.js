import React, {useState} from 'react';
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
import {DownArrowSymbol, SearchSymbol} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {Fonts} from '../../../utils/fonts';

import DropDownPicker from 'react-native-dropdown-picker';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const OpportunityMatching = ({navigation, route}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [searchText, setSearchText] = useState('');
  const [peronsList, setPeronsList] = useState([
    {
      person_name: 'Latham & Watkins',
      profile_image: 'https://picsum.photos/200/300',
    },
    {
      person_name: 'White & Case',
      profile_image: 'https://picsum.photos/200/300',
    },
    {
      person_name: 'Baker McKenzie',
      profile_image: 'https://picsum.photos/200/300',
    },
    {
      person_name: 'Simpson Thacher & Bartlett',
      profile_image: 'https://picsum.photos/200/300',
    },
    {
      person_name: 'Clifford Chance',
      profile_image: 'https://picsum.photos/200/300',
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
          // route.params.from_group
          //   ? navigation.navigate(NAVIGATION.PROFILE_SCREEN)
          //   : null;
          navigation.navigate(NAVIGATION.PROFILE);
        }}>
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
            PVB Network
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
          {route.params.from_group ? (
            <>
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
            </>
          ) : (
            <View
              style={{
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: Colors.border_color,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  fontFamily: Fonts.Regular_font,
                }}>
                Opportunity
                <Text style={{color: Colors.primary_color}}> Matching</Text>
              </Text>
            </View>
          )}
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
export default OpportunityMatching;