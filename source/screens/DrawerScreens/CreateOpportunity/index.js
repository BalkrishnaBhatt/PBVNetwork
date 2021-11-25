import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {CustomSafeAreaView, CustomHeader} from '../../../components';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector, useDispatch} from 'react-redux';
import {
  setLoader,
  getJurisdictionList,
  getAreaOfPracticeList,
  getTownList,
  getIndustryList,
} from '../../../redux/actions';
import axiosInstance from '../../../axios';
import {console_log} from '../../../utils/loggers';
import {Store} from '../../../redux/store';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const CreateOpportunity = ({navigation, route, ...props}) => {
  const dispatch = useDispatch();
  let InfoReducer = useSelector(state => state.InfoReducer);
  useEffect(() => {
    if (InfoReducer !== undefined) {
      // setFaqList(data_to_set);
      setItemsJurisdiction(InfoReducer.jurisdictionList);
      setItemsAreaPractice(InfoReducer.areaPractice);
      setItemsTown(InfoReducer.townList);
      setItemsIndustry(InfoReducer.industryList);
      setIsLoading(InfoReducer.isLoading);
    }
  }, [InfoReducer]);
  useEffect(() => {
    dispatch(getJurisdictionList(navigation));
    dispatch(getAreaOfPracticeList(navigation));
    dispatch(getTownList(navigation));
    dispatch(getIndustryList(navigation));
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  const [opportunityTitle, setOpportunityTitle] = useState('');
  const [opportunityDesc, setOpportunityDesc] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const [isOpen, setIsOpen] = useState(0);

  const [valueJurisdiction, setValueJurisdiction] = useState(null);
  const [valueAreaPractice, setValueAreaPractice] = useState(null);
  const [valueTown, setValueTown] = useState(null);
  const [valueIndustry, setValueIndustry] = useState(null);

  const [itemsJurisdiction, setItemsJurisdiction] = useState([
    // {label: 'INDIA', value: 'INDIA'},
    // {label: 'UNITED STATES', value: 'UNITED STATES'},
    // {label: 'UNITED ARAB EMIRATES', value: 'UNITED ARAB EMIRATES'},
    // {label: 'BELGIUM', value: 'BELGIUM'},
    // {label: 'SPAIN', value: 'SPAIN'},
    // {label: 'ESTONIA', value: 'ESTONIA'},
  ]);
  const [itemsAreaPractice, setItemsAreaPractice] = useState([
    // {label: 'Finance', value: 'Finance'},
    // {label: 'Equity Capital Markets', value: 'Equity Capital Markets'},
    // {label: 'Life Science & Healt Care', value: 'Life Science & Healt Care'},
    // {label: 'Project', value: 'Project'},
  ]);
  const [areaSelectedShow, setAreaSelectedShow] = useState('');
  const [itemsTown, setItemsTown] = useState([
    // {label: 'New Delhi', value: 'New Delhi'},
    // {label: 'Roma', value: 'Roma'},
    // {label: 'London', value: 'London'},
    // {label: 'Derby', value: 'Derby'},
  ]);
  const [itemsIndustry, setItemsIndustry] = useState([
    // {label: 'TMT', value: 'TMT'},
    // {label: 'Aviation & Transportation', value: 'Aviation & Transportation'},
    // {label: 'Finance', value: 'Finance'},
    // {label: 'Manufacturing', value: 'Manufacturing'},
  ]);
  const PostOpportunity = async () => {
    let area_to_pass = '';
    valueAreaPractice.map(value => {
      area_to_pass = area_to_pass + '&opportunity_areapractice[]=' + value;
    });
    // console.log('area_to_pass: ', area_to_pass);
    let url =
      'pbvnetwork/v1/createopportunity?pbvncust_create_opportunity=true' +
      '&opportunity_title=' +
      opportunityTitle +
      '&opportunity_desc=' +
      opportunityDesc +
      '&opportunity_expire_date=' +
      expirationDate +
      '&opportunity_jurisdiction=' +
      valueJurisdiction +
      '&opportunity_town=' +
      valueTown +
      area_to_pass +
      '&opportunity_industry[]=' +
      valueIndustry;
    console.log(
      'Store.getState().AuthenticationReducer.token: ',
      Store.getState().AuthenticationReducer.token,
    );
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    axiosInstance
      .post(url, {}, config)
      .then(async response => {
        console_log(
          'PostOpportunity response: ',
          JSON.stringify(response, null, 2),
        );
        if (response.status == 200) {
          setOpportunityTitle('');
          setOpportunityDesc('');
          setExpirationDate('');
          setAreaSelectedShow('');
          setValueIndustry(null);
          setValueJurisdiction(null);
          setValueTown(null);
          setValueAreaPractice(null);
          dispatch(setLoader(false));
          // dispatch(getHomeActivities());
        }
      })
      .catch(function (error) {
        dispatch(setLoader(false));
        console_log(JSON.stringify(error, null, 2));
        // let error_code = error.response.data.code;
        // handle error
      });
  };
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#000'} barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          // height: screen_height,
          // width: screen_width,
          zIndex: 0,
        }}>
        <ScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          style={{zIndex: 0}}
          // style={{
          //   backgroundColor: Colors.black,
          //   flex: 1,
          //   flexGrow: 1,
          //   // height: screen_height,
          //   // width: screen_width,
          // }}
        >
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
                setOpportunityDesc(text);
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
            <View style={{zIndex: 4, flex: 1}}>
              <DropDownPicker
                open={isOpen == 1}
                value={valueJurisdiction}
                items={itemsJurisdiction}
                setOpen={value => setIsOpen(value ? 1 : 0)}
                setValue={setValueJurisdiction}
                placeholder={'Jurisdiction'}
                placeholderStyle={Styles.placeholderStyle}
                style={Styles.DropDownPicker}
                listMode={'SCROLLVIEW'}
                dropDownContainerStyle={Styles.dropDownContainerStyle}
                textStyle={Styles.textStyle}
                // labelStyle={Styles.labelStyle}
                arrowIconStyle={{tintColor: Colors.border_color}}
              />
              <View style={{zIndex: 3}}>
                <DropDownPicker
                  open={isOpen == 2}
                  value={valueTown}
                  items={itemsTown}
                  setOpen={value => setIsOpen(value ? 2 : 0)}
                  setValue={setValueTown}
                  placeholder={'Town'}
                  listMode={'SCROLLVIEW'}
                  placeholderStyle={Styles.placeholderStyle}
                  style={Styles.DropDownPicker}
                  dropDownContainerStyle={Styles.dropDownContainerStyle}
                  textStyle={Styles.textStyle}
                  arrowIconStyle={{tintColor: Colors.border_color}}
                />
                <View style={{zIndex: 2}}>
                  <DropDownPicker
                    open={isOpen == 3}
                    value={valueAreaPractice}
                    items={itemsAreaPractice}
                    onChangeValue={value => {
                      let to_show = [];
                      if (value !== null && value.length > 0) {
                        itemsAreaPractice.map(element => {
                          if (value.indexOf(element.value) > -1) {
                            to_show.push(element.label);
                          }
                        });
                      }
                      // console.log(
                      //   'valueAreaPractice: ',
                      //   JSON.stringify(value, null, 2),
                      // );
                      setAreaSelectedShow(to_show.join(', '));
                      // console.log('areaSelectedShow: ', to_show);
                    }}
                    listMode={'SCROLLVIEW'}
                    multiple={true}
                    multipleText={areaSelectedShow}
                    setOpen={value => setIsOpen(value ? 3 : 0)}
                    setValue={setValueAreaPractice}
                    placeholder={'Area practice'}
                    placeholderStyle={Styles.placeholderStyle}
                    style={Styles.DropDownPicker}
                    dropDownContainerStyle={Styles.dropDownContainerStyle}
                    textStyle={Styles.textStyle}
                    arrowIconStyle={{tintColor: Colors.border_color}}
                  />
                  <View style={{zIndex: 1}}>
                    <DropDownPicker
                      open={isOpen == 4}
                      value={valueIndustry}
                      items={itemsIndustry}
                      listMode={'SCROLLVIEW'}
                      setOpen={value => setIsOpen(value ? 4 : 0)}
                      setValue={setValueIndustry}
                      placeholder={'Industry'}
                      placeholderStyle={Styles.placeholderStyle}
                      style={Styles.DropDownPicker}
                      // dropDownContainerStyle={Styles.dropDownContainerStyle}
                      dropDownContainerStyle={[
                        Styles.dropDownContainerStyle,
                        {zindex: 1, position: 'relative', marginTop: -45},
                      ]}
                      textStyle={Styles.textStyle}
                      arrowIconStyle={{tintColor: Colors.border_color}}
                    />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        // navigation.navigate(label);
                        dispatch(setLoader(true));
                        PostOpportunity();
                        // console.log(
                        //   'PostOpportunity',
                        //   JSON.stringify(valueAreaPractice, null, 2),
                        // );
                      }}
                      style={Styles.view_load_more}>
                      <Text style={Styles.text_load_more}>
                        CREATE OPPORTUNITY
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            {/* </View> */}
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default CreateOpportunity;
