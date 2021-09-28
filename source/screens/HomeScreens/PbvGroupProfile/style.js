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
    // position: 'relative',
    // padding: -10,
    alignSelf: 'flex-end',
    // right: 20,
    marginTop: -38,
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
    // elevation: 1000,
    zIndex: 10,
    width: '35%',
    alignSelf: 'flex-end',
    marginTop: -38,
    // marginRight: 20,
    right: 20,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
    color: Colors.primary_color,
  },
});
