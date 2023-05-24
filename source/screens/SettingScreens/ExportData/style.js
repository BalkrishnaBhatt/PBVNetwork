import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  View_Main: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
  },
  text_style: {
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
  },
  button_style: {
    backgroundColor: Colors.primary_color,
    padding: 16,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
