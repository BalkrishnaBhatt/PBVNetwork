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
  //////////////////////////////////////////
  view_field_main: {
    // flexDirection: 'row',
    // marginHorizontal: 10,
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
    marginTop: 10,
  },
  CheckedSymbol: {
    height: 20,
    width: 20,
    marginRight: 10,
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
  ///////////////////////////////////////////////////////
  view_upload: {
    borderStyle: 'dashed',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: Colors.primary_color,
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image_style: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 50,
  },
  text_upload_image: {
    color: Colors.primary_color,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Fonts.Regular_font,
    alignSelf: 'center',
    textAlign: 'center',
  },
  EditSymbol: {
    height: 25,
    width: 25,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
  },
});
