import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  view_button: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
  },
  text_button: {
    fontSize: 18,
    fontFamily: Fonts.Regular_font,
    color: Colors.black,
  },
});
