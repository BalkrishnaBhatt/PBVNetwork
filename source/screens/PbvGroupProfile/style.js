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
  ///////////////////////////////////////////////////////
  view_sort: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.primary_color,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_sort: {
    color: Colors.primary_color,
    fontSize: 12,
    margin: 7,
    marginRight: 15,
    fontFamily: Fonts.Regular_font,
    fontWeight: '300',
  },
  DownArrowSymbol: {
    height: 15,
    width: 15,
    marginRight: 7,
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
});
