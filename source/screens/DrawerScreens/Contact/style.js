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
    color: Colors.white,
    fontSize: 20,
    marginLeft: 20,
    fontFamily: Fonts.Bold_font,
  },
  ///////////////////////////////////////////////////////
  view_search_member: {
    margin: 20,
    marginTop: 140,
  },
  text_search_member: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 5,
    marginTop: 10,
    fontFamily: Fonts.Regular_font,
  },
  text_sub: {
    fontSize: 14,

    fontWeight: '100',
    color: '#a5a5a5',
    fontFamily: Fonts.Regular_font,
  },
  ///////////////////////////////////////////////////////
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
    margin: 10,
    marginHorizontal: 20,
    fontWeight: '400',
    fontFamily: Fonts.Regular_font,
  },
});
