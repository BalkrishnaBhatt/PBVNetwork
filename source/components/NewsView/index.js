import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const NewsView = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        // borderBottomWidth: 1,
        // borderColor: Colors.grey,
        paddingVertical: 15,
      }}
      activeOpacity={0.8}
      onPress={() => {}}>
      <Text
        style={{
          fontSize: 14,
          color: Colors.grey,
          marginBottom: 5,
          fontFamily: Fonts.Regular_font,
          fontWeight: '300',
        }}>
        News
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          fontFamily: Fonts.Regular_font,
          fontWeight: '300',
        }}>
        {item.title.rendered}
      </Text>
    </TouchableOpacity>
  );
};
export default NewsView;
