import {StyleSheet, Dimensions} from 'react-native';
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
  view_search_member: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.border_color,
    borderRadius: 10,
    padding: 10,
    margin: 20,
    // flexGrow: 1,
    zIndex: 6,
    // elevation: 10,
    marginBottom: 100,
    flexGrow: 1,
    flexWrap: 'nowrap',
  },
  text_search_member: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 5,
    marginTop: 10,
    fontFamily: Fonts.Regular_font,
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
  DropDownPicker: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border_color,
    marginVertical: 3,
    // padding: -10,
  },
  placeholderStyle: {
    color: Colors.border_color,
    fontSize: 14,
    fontWeight: '300',
  },
  dropDownContainerStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border_color,
    backgroundColor: Colors.white,
    elevation: 1000,
    zIndex: 10,
    // height: 150,
    position: 'relative',
    marginTop: -45,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
  },
  ///////////////////////////////////////////////////////
  view_load_more: {
    borderRadius: 7,
    backgroundColor: Colors.light_primary_color,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  text_load_more: {
    color: Colors.primary_color,
    fontSize: 12,
    margin: 5,
    marginHorizontal: 20,
    fontWeight: '600',
    fontFamily: Fonts.Regular_font,
  },
});
