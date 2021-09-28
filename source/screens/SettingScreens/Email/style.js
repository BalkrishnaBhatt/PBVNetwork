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
    paddingHorizontal: 20,
  },
  ///////////////////////////////////////////////////////
  text_send_email: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Fonts.Regular_font,
  },
  text_activity: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Fonts.Regular_font,
    marginTop: 10,
  },
  view_field_main: {
    borderBottomWidth: 1,
    borderColor: Colors.border_color,
    paddingVertical: 10,
    // paddingVertical: Platform.OS == 'ios' ? 10 : 0,
  },
  text_description: {
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
    marginTop: 10,
    fontWeight: '300',
  },
  text_yes_no: {
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
    fontWeight: '300',
    marginRight: 15,
    marginLeft: 5,
  },
  RadioSelectedSymbol: {
    height: 15,
    width: 15,
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
