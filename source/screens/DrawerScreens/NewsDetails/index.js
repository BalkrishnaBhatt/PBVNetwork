import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import CustomHeader from '../../../components/CustomHeader';
import {Colors} from '../../../utils/colors';
import axiosInstance from '../../../axios';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {Fonts} from '../../../utils/fonts';
import {console_log} from '../../../utils/loggers';
import HTML from 'react-native-render-html';
import moment from 'moment';
import {useIsFocused} from '@react-navigation/native';
const NewsDetails = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);
  // const [newsDetails, setNewsDetails] = useState(route.params.newsDetails);
  const [isLoading, setIsLoading] = useState(false);
  // const getNewsDetails = async () => {
  //   const config = {
  //     headers: {
  //       // 'Content-Type': 'application/json',
  //       // Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
  //     },
  //   };
  //   let url = 'pbvnetwork/v1/news_detail?news_id=' + newsDetails.id;
  //   axiosInstance
  //     .get(url, {}, config)
  //     .then(async response => {
  //       console_log(
  //         `getNewsDetails response :`,
  //         JSON.stringify(response, null, 2),
  //       );
  //       let data = response.data;
  //       // setAboutDetails(data.post_content);
  //       setIsLoading(false);
  //     })
  //     .catch(function (error) {
  //       console_log('getNewsDetails error: ', JSON.stringify(error, null, 2));
  //       setIsLoading(false);
  //     });
  // };
  const isFocused = useIsFocused();
  // useEffect(() => {
  //   // getNewsDetails();
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     setNewsDetails(route.params.newsDetails);
  //     console.log('focused');
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [navigation]);
  const html_style = {
    p: {
      fontSize: 14,
      fontWeight: '300',
      fontFamily: Fonts.Regular_font,
      color: Colors.black,
    },
  };
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View style={Styles.View_Main}>
        {isFocused ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{marginLeft: 20, marginBottom: 30, marginTop: 30}}
              onPress={() => {
                navigation.goBack();
              }}>
              Back
            </Text>
            <Text style={Styles.text_home}>
              {route.params.newsDetails.title.rendered}
            </Text>
            <View style={Styles.view_dash} />
            <Text style={Styles.text_date}>
              {moment(route.params.newsDetails.date).format('MMM DD, YYYY')}
            </Text>
            <View style={Styles.details_container}>
              <HTML
                // style={{marginLeft: 20}}
                source={{
                  html: route.params.newsDetails.content.rendered,
                }}
                tagsStyles={html_style}
              />
            </View>
          </ScrollView>
        ) : null}
      </View>
    </>
  );
};
export default NewsDetails;
