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
    marginBottom: 10,
    fontFamily: Fonts.Bold_font,
  },
  ///////////////////////////////////////////////////////
  selected_header: {
    // flex: 1,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  selected_header_text: {
    fontSize: 12,
    fontWeight: '500',
  },
  view_gap: {
    width: 15,
  },
  ///////////////////////////////////////////////////////
  view_main_modal: {
    backgroundColor: Colors.black_opacity_40,
    flex: 1,
    // opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  modal_white_back: {
    backgroundColor: 'white',
    // height: '80%',
    width: '90%',
    padding: 20,
    borderRadius: 20,
  },
  text_modal_title: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: -15,
    marginBottom: 25,
  },
  view_close: {
    backgroundColor: '#F5F5F5',
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  TextInput: {
    height: 80,
    borderWidth: 1,
    borderColor: Colors.border_color,
    // textAlign: 'center',
    borderRadius: 15,
    marginVertical: 15,
    padding: 10,
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
    margin: 10,
    marginHorizontal: 20,
    fontWeight: '400',
    fontFamily: Fonts.Regular_font,
  },
});
