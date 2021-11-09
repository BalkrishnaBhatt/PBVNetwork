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
    // height: 600,
  },
  /////////////////////////////
  touchable_header_selected: {
    borderBottomWidth: 1,
    borderColor: Colors.primary_color,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 40,
  },
  touchable_header_not_selected: {
    borderBottomWidth: 1,
    borderColor: Colors.transparant,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 40,
  },
  header_text: {
    fontSize: 14,
    color: Colors.primary_color,
    fontFamily: Fonts.Regular_font,
  },
});
