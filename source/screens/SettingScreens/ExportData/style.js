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
    color: Colors.primary_color,
  },
  button_style: {
    backgroundColor: Colors.light_primary_color,
    paddingHorizontal: 26,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
