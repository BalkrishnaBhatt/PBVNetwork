import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  BackHandler,
} from 'react-native';
import {
  MyActivityView,
  NewsView,
  ContentLoader,
  CustomSafeAreaView,
  OpportunityView,
} from '../../../components';
import {
  HomeTabSymbol,
  NewsTabSymbol,
  MemberTabSymbol,
  ChartTabSymbol,
  ManageTabSymbol,
  PowerButtonSymbol,
} from '../../../utils/svg';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import {NAVIGATION} from '../../../constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Fonts} from '../../../utils/fonts';
import {useSelector, useDispatch} from 'react-redux';
import {
  getHomeActivities,
  getHomeNews,
  setLoader,
  getUserOpportunity,
  getUserProfile,
} from '../../../redux/actions';
import {Store} from '../../../redux/store';
import axiosInstance from '../../../axios';
import {console_log} from '../../../utils/loggers';
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const ProfileScreen = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  let UserReducer = useSelector(state => state.UserReducer);
  useEffect(() => {
    if (UserReducer) {
      let data_to_set = UserReducer.userProfile;
      // console.log('data_to_set: ', data_to_set);

      setName(data_to_set.name);
      setFirmName(data_to_set.firmName);
      setJurisdiction(data_to_set.jurisdiction);
      setTown(data_to_set.town);
      setMobileNumber(data_to_set.mobileNumber);
      setPhoneNumber(data_to_set.phoneNumber);
      setAboutMe(data_to_set.aboutMe);
      setJobOpportunities(data_to_set.jobOpportunities);
      setBusinessOpportunities(data_to_set.businessOpportunities);
      setLanguageName(data_to_set.languageName);
      setCommandOnLanguage(data_to_set.commandOnLanguage);
      setInstituteSchool(data_to_set.instituteSchool);
      setDegreeProgram(data_to_set.degreeProgram);
      setStartYear(data_to_set.startYear);
      setEndYear(data_to_set.endYear);
      // setPeronsList(UserReducer.userOpportunity);
      setIsLoading(UserReducer.isLoading);
      // setNewsList(UserReducer.homeNews);
    }
  }, [UserReducer]);
  useEffect(() => {
    dispatch(getUserProfile(navigation));
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [firmName, setFirmName] = useState('');
  const [jurisdiction, setJurisdiction] = useState('');
  const [town, setTown] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [jobOpportunities, setJobOpportunities] = useState('');
  const [businessOpportunities, setBusinessOpportunities] = useState('');
  const [languageName, setLanguageName] = useState('');
  const [commandOnLanguage, setCommandOnLanguage] = useState('');
  const [instituteSchool, setInstituteSchool] = useState('');
  const [degreeProgram, setDegreeProgram] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  // const backAction = () => {
  //   // navigation.navigate(NAVIGATION.GROUP_DETAIL);
  //   navigation.goBack();
  // };
  const UpdateUserInfo = async () => {
    let url =
      'pbvnetwork/v1/updateuserfield/' +
      Store.getState().AuthenticationReducer.userId;
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    url =
      url +
      '?name=' +
      name +
      '&firm_name=' +
      firmName +
      '&jurisdiction=' +
      jurisdiction +
      '&town=' +
      town +
      '&mobile_number=' +
      mobileNumber +
      '&phone_number=' +
      phoneNumber +
      '&about_me=' +
      aboutMe +
      '&job_opportunities=' +
      jobOpportunities +
      '&business_opportunities=' +
      businessOpportunities;
    // '&job_opportunities=' +
    // jobOpportunities+
    // '&job_opportunities=' +
    // jobOpportunities;
    // console.log('UpdateUserInfourl', url);
    axiosInstance
      .post(url, {}, config)
      .then(async response => {
        dispatch(setLoader(false));
        console_log(
          'UpdateUserInfo response: ',
          JSON.stringify(response, null, 2),
        );
      })
      .catch(function (error) {
        console_log(
          'UpdateUserInfo error',
          JSON.stringify(error.response, null, 2),
        );
        dispatch(setLoader(false));
        // handle error
        let error_code = error.response.data.code;
        if (
          error_code == 'jwt_auth_invalid_token' ||
          error_code == 'rest_forbidden'
        ) {
          navigation.replace(NAVIGATION.LOGIN);
        }
        // console_log('Error of config', error.config);
      });
  };
  return (
    <>
      <View style={Styles.View_Main}>
        {isLoading ? (
          <ContentLoader />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.view_base}>
              <Text style={Styles.text_base}>Base</Text>
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>Name</Text>
              <TextInput
                placeholder="PBVNetwork"
                style={Styles.textinput_field}
                value={name}
                onChangeText={value => setName(value)}
              />
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>Firm Name</Text>
              <TextInput
                placeholder="FirmDip"
                style={Styles.textinput_field}
                value={firmName}
                onChangeText={value => setFirmName(value)}
              />
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>Jurisdiction</Text>
              <TextInput
                placeholder="Myjudiriction"
                style={Styles.textinput_field}
                value={jurisdiction}
                onChangeText={value => setJurisdiction(value)}
              />
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>Town</Text>
              <TextInput
                placeholder="MyTown"
                style={Styles.textinput_field}
                value={town}
                onChangeText={value => setTown(value)}
              />
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>Mobile Number</Text>
              <TextInput
                placeholder="MyMobileNumber"
                style={Styles.textinput_field}
                value={mobileNumber}
                maxLength={10}
                keyboardType="number-pad"
                onChangeText={value => setMobileNumber(value)}
              />
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>Phone Number</Text>
              <TextInput
                placeholder="MyPhoneNumber"
                style={Styles.textinput_field}
                value={phoneNumber}
                maxLength={10}
                keyboardType="phone-pad"
                onChangeText={value => setPhoneNumber(value)}
              />
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>About Me</Text>
              <TextInput
                placeholder="Hi I am Dipendra."
                style={Styles.textinput_field}
                value={aboutMe}
                onChangeText={value => setAboutMe(value)}
              />
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>Job Opportunities</Text>
              <TextInput
                placeholder="JobOpportunities"
                style={Styles.textinput_field}
                value={jobOpportunities}
                onChangeText={value => setJobOpportunities(value)}
              />
            </View>
            <View style={[Styles.view_field_main, {borderBottomWidth: 0}]}>
              <Text style={Styles.text_field_title}>
                Business Opportunities
              </Text>
              <TextInput
                placeholder="BusinessOpportunities"
                style={Styles.textinput_field}
                value={businessOpportunities}
                onChangeText={value => setBusinessOpportunities(value)}
              />
            </View>
            <View style={Styles.view_base}>
              <Text style={Styles.text_base}>Language</Text>
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>Language Name</Text>
              <TextInput
                placeholder="Eng"
                style={Styles.textinput_field}
                value={languageName}
                onChangeText={value => setLanguageName(value)}
              />
            </View>
            <View style={[Styles.view_field_main, {borderBottomWidth: 0}]}>
              <Text style={Styles.text_field_title}>Command on Language</Text>
              <TextInput
                placeholder="C1 - Advanced"
                style={Styles.textinput_field}
                value={commandOnLanguage}
                onChangeText={value => setCommandOnLanguage(value)}
              />
            </View>
            <View style={Styles.view_base}>
              <Text style={Styles.text_base}>Educations</Text>
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>Institute / School</Text>
              <TextInput
                placeholder="MLSU"
                style={Styles.textinput_field}
                value={instituteSchool}
                onChangeText={value => setInstituteSchool(value)}
              />
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>Degree/Program</Text>
              <TextInput
                placeholder="Degree/Program"
                style={Styles.textinput_field}
                value={degreeProgram}
                onChangeText={value => setDegreeProgram(value)}
              />
            </View>
            <View style={Styles.view_field_main}>
              <Text style={Styles.text_field_title}>Start Year</Text>
              <TextInput
                placeholder="StartYear"
                style={Styles.textinput_field}
                value={startYear}
                onChangeText={value => setStartYear(value)}
              />
            </View>
            <View style={[Styles.view_field_main, {borderBottomWidth: 0}]}>
              <Text style={Styles.text_field_title}>End Year</Text>
              <TextInput
                placeholder="EndYear"
                style={Styles.textinput_field}
                value={endYear}
                onChangeText={value => setEndYear(value)}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                dispatch(setLoader(true));
                UpdateUserInfo();
              }}
              style={Styles.view_load_more}>
              <Text style={Styles.text_load_more}>UPDATE</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </View>
    </>
  );
};
export default ProfileScreen;
