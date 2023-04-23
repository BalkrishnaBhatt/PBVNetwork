import {StyleSheet, Dimensions} from 'react-native';
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
  text_home: {
    color: Colors.primary_color,
    fontSize: 20,
    marginLeft: 20,
    fontFamily: Fonts.Bold_font,
  },
  text_about_details: {
    color: Colors.black,
    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 30,
    fontFamily: Fonts.Regular_font,
  },
});
