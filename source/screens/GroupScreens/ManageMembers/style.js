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
    // paddingHorizontal: 100
  },
  ///////////////////////////////////////////////////////
  view_search: {
    borderRadius: 10,
    borderColor: Colors.border_color,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == 'ios' ? 10 : 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  SearchSymbol: {
    height: 15,
    width: 15,
    marginRight: 7,
  },
  TextInput: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: Colors.border_color,
    // textAlign: 'center',
    // borderRadius: 5,
    // marginVertical: 10,
    // marginHorizontal: 20,
    padding: 5,
  },
});
