import React, {useRef} from 'react';
import {TextInput, Text, View, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import moment from 'moment';
import HTML from 'react-native-render-html';
import {FavouriteSymbol, CommentsSymbol, DeleteSymbol} from '../../utils/svg';
const MyActivityView = ({item}) => {
  const view_flatlist_comment_favourite = {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 7,
    // height: 15,
    marginRight: 5,
    paddingHorizontal: 10,
  };
  const CommentsSymbolStyle = {
    height: 10,
    width: 10,
    marginRight: 5,
  };
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        shadowColor: Colors.black,
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
        backgroundColor: Colors.white,
        padding: 7,
        borderRadius: 8,
        marginHorizontal: 20,
        marginVertical: 8,
      }}
      activeOpacity={0.8}
      onPress={() => {}}>
      <Image
        source={{uri: item.user_avatar && item.user_avatar.thumb}}
        resizeMode="cover"
        style={{height: 25, width: 25, borderRadius: 9}}
      />

      <View
        style={{
          marginHorizontal: 8,
          flex: 1,
        }}>
        <HTML
          source={{
            html:
              item && item.title
                ? item.title.replace(/<a/g, '<b').replace(/a>/g, 'b>')
                : '',
            // html: item.title,
          }}
          tagsStyles={{
            b: {
              fontSize: 13,
              fontWeight: 'bold',
              fontFamily: Fonts.Regular_font,
            },
            li: {
              // fontSize: Dimens.dimen_16,
              // fontFamily: Fonts.Roboto_Regular,
              // marginVertical: Dimens.dimen_2,
            },
          }}
        />
        {/* <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
            fontFamily: Fonts.Regular_font,
          }}>
          {item.person_name}{' '}
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            {item.description}
          </Text>{' '}
          {item.group_name} 
        </Text> */}
        <Text
          style={{
            fontSize: 8,
            fontFamily: Fonts.Regular_font,
            color: Colors.border_color,
            marginVertical: 15,
          }}>
          {/* 3 hours, 39 minutes ago */}
          {moment(item.date).fromNow()}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              view_flatlist_comment_favourite,
              {
                backgroundColor: Colors.grey,
              },
            ]}>
            <CommentsSymbol style={CommentsSymbolStyle} />
            <Text
              style={{
                fontSize: 8,
                fontFamily: Fonts.Regular_font,
                marginVertical: 5,
              }}>
              Comment({item.number_of_comments})
            </Text>
          </View>
          <View
            style={[
              view_flatlist_comment_favourite,
              {
                backgroundColor: Colors.light_primary_color,
              },
            ]}>
            <FavouriteSymbol style={CommentsSymbolStyle} />
            <Text
              style={{
                fontSize: 8,
                fontFamily: Fonts.Regular_font,
                color: Colors.primary_color,
              }}>
              Favourite
            </Text>
          </View>
          <View
            style={[
              view_flatlist_comment_favourite,
              {
                backgroundColor: Colors.light_red,
              },
            ]}>
            <DeleteSymbol style={CommentsSymbolStyle} />
            <Text
              style={{
                fontSize: 8,
                fontFamily: Fonts.Regular_font,
                color: Colors.red,
              }}>
              Delete
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default MyActivityView;
