import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const styles = StyleSheet.create({
  view_main_modal: {
    backgroundColor: Colors.black_opacity_40,
    flex: 1,
    // opacity: 0.5,
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'flex-end',
  },
  modal_white_back: {
    backgroundColor: 'white',
    // height: '60%',
    width: '100%',
    padding: 20,
    paddingBottom: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  ///////////////////////////////////////
  text_option: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: Fonts.Regular_font,
    marginBottom: 10,
  },
});
export default styles;
