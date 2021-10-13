import React, {useRef} from 'react';
import {TextInput, Text, View, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

import HTML from 'react-native-render-html';
import {FavouriteSymbol, CommentsSymbol, DeleteSymbol} from '../../utils/svg';
const OpportunityView = ({item}) => {
  const text_style = {
    fontSize: 12,
    color: Colors.black,
    fontFamily: Fonts.Regular_font,
    fontWeight: '300',
    marginTop: 5,
  };
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.light_primary_color,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
      }}
      activeOpacity={0.8}
      onPress={() => {
        // navigation.navigate(NAVIGATION.PROFILE);
      }}>
      <Image
        source={{uri: item.profile_image}}
        resizeMode="cover"
        style={{height: 50, width: 50, borderRadius: 15}}
      />
      <View
        style={{
          paddingHorizontal: 10,
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 14,
            color: Colors.black,
            marginBottom: 5,
            fontFamily: Fonts.Regular_font,
            fontWeight: '600',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: Colors.black,
            fontFamily: Fonts.Regular_font,
            fontWeight: '300',
          }}>
          {item.description}
        </Text>
        <Text style={text_style}>
          Expire Date:
          <Text
            style={{
              color: Colors.primary_color,
            }}>
            {' '}
            {item.date}
          </Text>
        </Text>
        <Text style={text_style}>
          Jurisdiction:
          <Text
            style={{
              color: Colors.primary_color,
            }}>
            {' '}
            {item.jurisdiction}
          </Text>
        </Text>
        <Text style={text_style}>
          Town:
          <Text
            style={{
              color: Colors.primary_color,
            }}>
            {' '}
            {item.town}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default OpportunityView;
