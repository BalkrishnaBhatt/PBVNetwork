import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useContext,
  useRef,
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  AppState,
  Modal,
  Platform,
  ImageBackground,
  Alert,
  ToastAndroid,
  Switch,
  Share,
  TextInput,
} from 'react-native';
import Common_styles from '../../utils/commonStyle';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import CustomTextInput from '../../components/CustomTextInput';
import CustomHeader from '../../components/CustomHeader';
import {
  LoginTopCurve,
  LoginBottomCurve,
  NextRoundArrowSymbol,
  DownArrowSymbol,
  SearchSymbol,
} from '../../utils/svg';
import Images from '../../utils/images';
import {Colors} from '../../utils/colors';
import {console_log} from '../../utils/loggers';
import Styles from './style';
import {NAVIGATION} from '../../constant';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const CreateOpportunity = ({navigation, route, ...props}) => {
  //   const {dark, theme, toggle} = useContext(ThemeContext);

  const [opportunityTitle, setOpportunityTitle] = useState('');
  const [opportunityDesc, setOpportunityDesc] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          // height: screen_height,
          // width: screen_width,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomHeader navigation={navigation} {...props}></CustomHeader>
          <Text style={Styles.text_home}>Opportunity</Text>
          <View style={Styles.view_search_member}>
            <Text style={Styles.text_search_member}>Create Opportunity</Text>
            <TextInput
              value={opportunityTitle}
              onChangeText={text => {
                setOpportunityTitle(text);
              }}
              placeholder="Opportunity Title"
              placeholderTextColor={Colors.border_color}
              style={Styles.TextInput_search_member}
            />
            <TextInput
              value={opportunityDesc}
              onChangeText={text => {
                setOpportunityTitle(text);
              }}
              placeholder="Opportunity Desc"
              placeholderTextColor={Colors.border_color}
              style={Styles.TextInput_search_member}
            />
            <TextInput
              value={expirationDate}
              onChangeText={text => {
                setExpirationDate(text);
              }}
              placeholder="Expiration Date"
              placeholderTextColor={Colors.border_color}
              style={Styles.TextInput_search_member}
            />
            <View style={Styles.view_dropdown}>
              <Text style={Styles.text_dropdown}>Jurisdiction</Text>
              <View style={{flex: 1}} />
              <DownArrowSymbol
                style={Styles.DownArrowSymbol}
                fill={Colors.border_color}></DownArrowSymbol>
            </View>
            <View style={Styles.view_dropdown}>
              <Text style={Styles.text_dropdown}>Town</Text>
              <View style={{flex: 1}} />
              <DownArrowSymbol
                style={Styles.DownArrowSymbol}
                fill={Colors.border_color}></DownArrowSymbol>
            </View>
            <View style={Styles.view_dropdown}>
              <Text style={Styles.text_dropdown}>Area practice</Text>
              <View style={{flex: 1}} />
              <DownArrowSymbol
                style={Styles.DownArrowSymbol}
                fill={Colors.border_color}></DownArrowSymbol>
            </View>
            <View style={Styles.view_dropdown}>
              <Text style={Styles.text_dropdown}>Industry</Text>
              <View style={{flex: 1}} />
              <DownArrowSymbol
                style={Styles.DownArrowSymbol}
                fill={Colors.border_color}></DownArrowSymbol>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // navigation.navigate(label);
              }}
              style={Styles.view_load_more}>
              <Text style={Styles.text_load_more}>CREATE OPPORTUNITY</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default CreateOpportunity;
