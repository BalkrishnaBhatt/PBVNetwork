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
const GroupListView = ({item, numberOfColumns, navigation, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.white,
        borderRadius: 15,
        padding: 10,
        margin: 4,

        shadowColor: Colors.black,
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
        width: screen_width / numberOfColumns - 25,
      }}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate(NAVIGATION.GROUP_DETAIL);
      }}>
      <Image
        source={{uri: item.avatar_urls.full}}
        resizeMode="cover"
        style={{height: 150, borderRadius: 10, margin: -10}}
      />
      <Text
        style={{
          fontSize: 14,
          color: Colors.primary_color,
          marginBottom: 5,
          fontWeight: '400',
          marginTop: 20,
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '400',
          color: Colors.border_color,
        }}>
        <Text style={{color: '#00C620'}}>Active</Text> {item.created_since}
      </Text>
    </TouchableOpacity>
  );
};
export default GroupListView;
