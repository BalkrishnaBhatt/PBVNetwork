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
  ///////////////////////////////////////////////////////
  TextInput: {
    flex: 1,
    height: 80,
    borderWidth: 1,
    borderColor: Colors.border_color,
    // textAlign: 'center',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 7,
    textAlignVertical: 'top',
    color: 'black',
  },
  ///////////////////////////////////////////////////////
  view_whats_new: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  view_whats_new_sub: {
    height: 25,
    width: 25,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: Colors.modal_blur,
  },
  text_whats_new: {
    fontSize: 16,
    fontFamily: Fonts.Regular_font,
    fontWeight: '400',
  },
  ///////////////////////////////////////////////////////
  view_load_more: {
    borderRadius: 7,
    backgroundColor: Colors.light_primary_color,
    alignSelf: 'center',
  },
  text_load_more: {
    color: Colors.primary_color,
    fontSize: 12,
    margin: 7,
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
    width: '35%',
    marginLeft: 20,
    marginTop: -40,
    // padding: -10,
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
    width: '35%',
    marginLeft: 20,
    marginTop: -40,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
    color: Colors.primary_color,
  },
  ///////////////////////////////////////////////////////
  DropDownPicker2: {
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary_color,
    marginVertical: 3,
    width: '40%',
    // padding: -10,
    marginLeft: 20,
    marginBottom: 10,
  },
  dropDownContainerStyle2: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary_color,
    backgroundColor: Colors.white,
    elevation: 1000,
    zIndex: 10,
    width: '40%',
    marginLeft: 20,
  },
});
