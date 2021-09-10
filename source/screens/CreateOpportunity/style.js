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
  view_search_member: {
    borderWidth: 1,
    borderColor: Colors.border_color,
    borderRadius: 10,
    padding: 10,
    margin: 20,
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
  },
  ///////////////////////////////////////////////////////
  view_dropdown: {
    borderWidth: 1,
    borderColor: Colors.border_color,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  text_dropdown: {
    fontFamily: Fonts.Regular_font,
    fontWeight: '400',
    fontSize: 14,
    color: Colors.border_color,
  },
  DownArrowSymbol: {
    height: 15,
    width: 15,
    marginRight: 7,
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
});
