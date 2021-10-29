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
  view_featured_news: {
    backgroundColor: Colors.light_primary_color,
    // height: 20,
    width: '40%',
    marginVertical: 20,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    // paddingHorizontal: 20,
  },
  text_featured_news: {
    color: Colors.primary_color,
    fontSize: 14,
    margin: 7,
    marginHorizontal: 20,
  },
  ///////////////////////////////////////////////////////
  view_flatlist_main_news: {
    height: 100,
    width: 200,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
