import React from 'react';
import {Text, View, TouchableOpacity, Image, Linking} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import moment from 'moment';
const MemberView = ({item}) => {
  const button_style = {
    // height: 50,
    borderRadius: 10,
    // width: '22%',
    backgroundColor: Colors.primary_color,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    padding: 5,
    flex: 1,
  };
  const text_button = {
    fontSize: 12,
    fontFamily: Fonts.Regular_font,
    fontWeight: '600',
    color: Colors.white,
    // marginHorizontal: 5,
    textAlign: 'center',
  };
  return (
    <TouchableOpacity
      style={{
        // borderBottomWidth: 1,
        // borderColor: Colors.grey,
        // paddingVertical: 15,
        backgroundColor: Colors.light_primary_color,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
      }}
      activeOpacity={0.8}
      onPress={() => {
        Linking.openURL(item.link);
        // route.params.from_group
        //   ? navigation.navigate(NAVIGATION.PROFILE_SCREEN)
        //   : null;
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri:
              item.avatar_urls && item.avatar_urls.thumb
                ? item.avatar_urls.thumb
                : '',
            // : item.profile_image,
          }}
          resizeMode="cover"
          style={{height: 50, width: 50, borderRadius: 15}}
        />
        <View style={{padding: 10}}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
              // marginBottom: 5,
              fontFamily: Fonts.Regular_font,
              fontWeight: '300',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: Colors.primary_color,
              fontFamily: Fonts.Regular_font,
              fontWeight: '300',
            }}>
            {'joined '}
            {/* {item.joined} */}
            {moment(item.date_modified).fromNow()}
          </Text>
        </View>
      </View>
      {/* <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={button_style} activeOpacity={0.8}>
              <Text style={text_button}>{'Kick & Ban'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button_style} activeOpacity={0.8}>
              <Text style={text_button}>{'Promote to Mod'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button_style} activeOpacity={0.8}>
              <Text style={text_button}>{'Promote to Admin'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button_style} activeOpacity={0.8}>
              <Text style={text_button}>{'Remove from group'}</Text>
            </TouchableOpacity>
          </View> */}
    </TouchableOpacity>
  );
};
export default MemberView;
