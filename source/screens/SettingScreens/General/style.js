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
  view_field_main: {
    // flexDirection: 'row',
    marginHorizontal: 30,
    borderBottomWidth: 1,
    borderColor: Colors.border_color,
    // alignItems: 'center',
    paddingVertical: Platform.OS == 'ios' ? 20 : 10,
  },
  text_field_title: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Fonts.Regular_font,
    color: Colors.black,
  },
  textinput_field: {
    flex: 1,
    color: Colors.primary_color,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: Fonts.Regular_font,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.border_color,
    padding: 5,
  },
  ///////////////////////////////////////////////////////
  view_save_changes: {
    borderRadius: 7,
    backgroundColor: Colors.light_primary_color,
    alignSelf: 'center',
    margin: 15,
  },
  text_save_changes: {
    color: Colors.primary_color,
    fontSize: 12,
    margin: 5,
    marginHorizontal: 20,
    fontWeight: '600',
    fontFamily: Fonts.Regular_font,
  },
});
