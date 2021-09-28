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
    marginBottom: 10,
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
  TextInput: {
    flex: 1,
    // height: 80,
    // borderWidth: 1,
    // borderColor: Colors.border_color,
    // textAlign: 'center',
    // borderRadius: 5,
    // marginVertical: 10,
    // marginHorizontal: 20,
    // padding: 7,
  },
  ///////////////////////////////////////////////////////
  view_selected_header: {
    borderWidth: 1,
    borderColor: Colors.primary_color,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  text_header_selected: {
    fontSize: 14,
    fontWeight: '500',
  },
  ///////////////////////////////////////////////////////
  view_sort: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.primary_color,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  text_sort: {
    color: Colors.primary_color,
    fontSize: 12,
    margin: 5,
    marginRight: 15,
  },
  DownArrowSymbol: {
    height: 15,
    width: 15,
    marginRight: 7,
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
    // marginLeft: -120,
    // marginRight: 200,
    // left: 20,
    right: 20,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
    color: Colors.primary_color,
  },
});
