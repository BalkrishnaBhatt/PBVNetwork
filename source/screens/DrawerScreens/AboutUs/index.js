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
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const AboutUs = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);
  const [aboutDetails, setAboutDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const getAboutUsDetails = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url = 'pbvnetwork/v1/about_detail';
    axiosInstance
      .get(url, {}, config)
      .then(async response => {
        console_log(
          `getAboutUsDetails response :`,
          JSON.stringify(response, null, 2),
        );
        let data = response.data;
        setAboutDetails(data.post_content);
        setIsLoading(false);
      })
      .catch(function (error) {
        console_log(
          'getAboutUsDetails error: ',
          JSON.stringify(error, null, 2),
        );
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getAboutUsDetails();
  }, []);
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomHeader navigation={navigation} {...props}></CustomHeader>
          <Text style={Styles.text_home}>About Us</Text>
          <Text style={Styles.text_about_details}>
            <HTML
              // style={{marginLeft: 20}}
              source={{
                html: aboutDetails,
              }}
              tagsStyles={html_style}
            />
          </Text>
        </ScrollView>
      </View>
    </>
  );
};
export default AboutUs;
