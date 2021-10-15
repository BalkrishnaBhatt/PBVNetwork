import React, {useRef} from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

import HTML from 'react-native-render-html';
import {FavouriteSymbol, CommentsSymbol, DeleteSymbol} from '../../utils/svg';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;
const EmptyList = ({item, numberOfColumns, navigation, ...props}) => {
  return (
    <Text
      style={{
        fontFamily: Fonts.Regular_font,
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',
      }}>
      No Data Found
    </Text>
  );
};
export default EmptyList;
