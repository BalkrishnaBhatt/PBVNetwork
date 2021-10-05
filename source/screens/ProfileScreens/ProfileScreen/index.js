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
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
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
const Tab = createMaterialTopTabNavigator();
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const ProfileScreen = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);
  let AuthenticationReducer = useSelector(state => state.AuthenticationReducer);
  useEffect(() => {
    if (AuthenticationReducer.email) {
      setName(AuthenticationReducer.email);
    } else {
      setName('srp');
    }
  }, [AuthenticationReducer]);
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
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View style={Styles.View_Main}>
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
            <Text style={Styles.text_field_title}>Business Opportunities</Text>
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
          <View
            style={[
              Styles.view_field_main,
              {borderBottomWidth: 0, marginBottom: 100},
            ]}>
            <Text style={Styles.text_field_title}>End Year</Text>
            <TextInput
              placeholder="EndYear"
              style={Styles.textinput_field}
              value={endYear}
              onChangeText={value => setEndYear(value)}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default ProfileScreen;
