import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  View_Main: {
    flex: 1,
    backgroundColor: Colors.white,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 100
  },
  //////////////////////////////////////////
  view_base: {
    backgroundColor: '#F2F2F2',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 20,
    padding: 10,
    marginTop: 20,
  },
  text_base: {
    fontFamily: Fonts.Regular_font,
    fontSize: 14,
    fontWeight: '500',
  },
  //////////////////////////////////////////
  view_field_main: {
    flexDirection: 'row',
    marginHorizontal: 30,
    borderBottomWidth: 1,
    borderColor: Colors.border_color,
    alignItems: 'center',
    paddingVertical: Platform.OS == 'ios' ? 10 : 0,
  },
  text_field_title: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Fonts.Regular_font,
  },
  textinput_field: {
    flex: 1,
    color: Colors.primary_color,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: Fonts.Regular_font,
  },
});
