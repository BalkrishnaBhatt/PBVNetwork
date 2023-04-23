import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NAVIGATION} from '../../constant';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const NewsView = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 15,
      }}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate(NAVIGATION.NEWS_DETAILS, {newsDetails: item});
      }}>
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
