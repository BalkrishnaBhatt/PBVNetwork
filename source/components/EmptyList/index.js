import React from 'react';
import {Text} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const EmptyList = ({item, numberOfColumns, navigation}) => {
  return (
    <Text
      style={{
        fontFamily: Fonts.Regular_font,
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',
        color: Colors.black,
      }}>
      No Data Found
    </Text>
  );
};
export default EmptyList;
