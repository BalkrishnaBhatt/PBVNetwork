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
  menuTriggertextStyle: {
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
    color: Colors.black,
    flex: 1,
  },
  menuTriggerView: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#e5e5e5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
  },
  menuOptionText: {
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
    color: Colors.black,
    marginBottom: 5,
  },
});
