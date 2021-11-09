import React, {useState, useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {console_log} from '../../../utils/loggers';
import {Store} from '../../../redux/store';
const GroupOverview = ({navigation, route, ...props}) => {
  const group_id = Store.getState().GroupDetailReducer.groupDetails.id;
  useEffect(async () => {
    console_log(
      'overview_url: ',
      'https://www.pbvnetwork.com/?group_overview=true&group_id=' + group_id,
    );
  }, []);
  return (
    <>
      <View style={Styles.View_Main}>
        <AutoHeightWebView
          source={{
            uri:
              'https://www.pbvnetwork.com/?group_overview=true&group_id=' +
              group_id,
          }}
          // style={{marginTop: 20, height: 500}}
          viewportContent={'width=device-width, user-scalable=no'}
          scalesPageToFit={true}
          customStyle={{marginTop: 20, height: 500}}
          // javaScriptEnabled={true}
          // domStorageEnabled={true}
          // startInLoadingState={true}
        />
      </View>
    </>
  );
};
export default GroupOverview;
