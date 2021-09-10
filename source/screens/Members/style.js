import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

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
    padding: 10,
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
  },
  TextInput_search_member: {
    borderWidth: 1,
    borderColor: Colors.border_color,
    borderRadius: 10,
    marginVertical: 5,
    // marginHorizontal: 20,
    padding: 7,
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
  view_sort: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.primary_color,
    flexDirection: 'row',
    alignItems: 'center',
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
});
