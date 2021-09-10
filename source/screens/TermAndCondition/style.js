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
  text_term: {
    marginBottom: 10,
    fontSize: 12,
    fontFamily: Fonts.Regular_font,
    fontWeight: '400',
    color: '#A5A5A5',
    marginHorizontal: 20,
  },
});
