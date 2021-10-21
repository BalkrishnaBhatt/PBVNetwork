import React, {useRef} from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import images from '../../utils/images';

import {FavouriteSymbol, CommentsSymbol, DeleteSymbol} from '../../utils/svg';
const ContentLoader = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        height: 200,
        // alignSelf: 'flex-start',
        paddingTop: 150,
      }}>
      {/* <Image
        source={images.contentLoader}
        // source={{
        //   uri: 'http://38.media.tumblr.com/9e9bd08c6e2d10561dd1fb4197df4c4e/tumblr_mfqekpMktw1rn90umo1_500.gif',
        // }}
        resizeMode="contain"
        style={{flex: 1, height: 100, width: 200}}
      /> */}

      <ActivityIndicator size={'large'} color={Colors.ActivityIndicator} />
    </View>
  );
};
export default ContentLoader;
