import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  View_Main: {
    flex: 1,
    // backgroundColor: Colors.splash_background,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 100
  },
  text_home: {
    color: Colors.primary_color,
    fontSize: 20,
    marginLeft: 20,
    fontFamily: Fonts.Bold_font,
  },
  ///////////////////////////////////////////////////////
  view_search: {
    borderRadius: 10,
    borderColor: Colors.border_color,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == 'ios' ? 10 : 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  SearchSymbol: {
    height: 15,
    width: 15,
    marginRight: 7,
  },
  ///////////////////////////////////////////////////////
  view_search_member: {
    borderWidth: 1,
    borderColor: Colors.border_color,
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  text_search_member: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: Colors.black,
  },
  TextInput_search_member: {
    borderWidth: 1,
    borderColor: Colors.border_color,
    borderRadius: 10,
    marginVertical: 5,
    // marginHorizontal: 20,
    padding: 7,
    color: Colors.black,
  },
  ///////////////////////////////////////////////////////
  view_load_more: {
    borderRadius: 7,
    backgroundColor: Colors.light_primary_color,
    alignSelf: 'center',
    margin: 15,
  },
  text_load_more: {
    color: Colors.primary_color,
    fontSize: 12,
    margin: 5,
    marginHorizontal: 20,
    fontWeight: '600',
    fontFamily: Fonts.Regular_font,
  },
  ///////////////////////////////////////////////////////
  header_symbol: {
    height: 25,
    width: 25,
    fontWeight: '900',
  },
  list_text: {
    fontSize: 18,
    color: Colors.white,
    marginLeft: 15,
  },
  ///////////////////////////////////////////////////////
  DropDownPicker: {
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary_color,
    marginVertical: 3,
    width: '40%',
    // padding: -10,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: -38,
  },
  placeholderStyle: {
    color: Colors.primary_color,
    fontSize: 14,
    fontWeight: '300',
  },
  dropDownContainerStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary_color,
    backgroundColor: Colors.white,
    elevation: 1000,
    zIndex: 10,
    width: '40%',
    alignSelf: 'flex-end',
    marginLeft: -120,
    right: 20,
    marginTop: -38,
    // marginRight: 200,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
    color: Colors.primary_color,
  },
  ///////////////////////////////////////////////////////
  DropDownPicker2: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border_color,
    marginVertical: 3,
    // padding: -10,
  },
  placeholderStyle2: {
    color: Colors.border_color,
    fontSize: 14,
    fontWeight: '300',
  },
  dropDownContainerStyle2: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border_color,
    backgroundColor: Colors.white,
    elevation: 1000,
    zIndex: 10,
    // height: 120,
    position: 'relative',
    marginTop: -45,
  },
  textStyle2: {
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
    color: Colors.black,
  },
});
