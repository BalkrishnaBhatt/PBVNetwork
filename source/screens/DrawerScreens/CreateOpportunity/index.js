import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ActivityIndicator,
  Alert,
  FlatList,
} from 'react-native';
import {
  CustomSafeAreaView,
  CustomHeader,
  OpportunityView,
  EmptyList,
} from '../../../components';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect, useSelector, useDispatch} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import {
  setLoader,
  // getJurisdictionList,
  getAreaOfPracticeList,
  getTownList,
  getIndustryList,
  getLawyerRoleList,
  getClientDimensionList,
  getDealCaseDimensionList,
} from '../../../redux/actions';
import axiosInstance from '../../../axios';
import {console_log} from '../../../utils/loggers';
import {Store} from '../../../redux/store';
import {NAVIGATION} from '../../../constant';

import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const CreateOpportunity = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getJurisdictionList(props.navigation));
    dispatch(getAreaOfPracticeList(props.navigation));
    dispatch(getIndustryList(props.navigation));
    /////////////////////////////
    dispatch(getLawyerRoleList(props.navigation));
    dispatch(getClientDimensionList(props.navigation));
    dispatch(getDealCaseDimensionList(props.navigation));
    getJuriList();

    if (is_edit) {
      dispatch(setLoader(true));
      // console_log(
      //   'opportunityData: ',
      //   JSON.stringify(opportunityData, null, 2),
      // );
      setExpirationDate(opportunityData.expire_date);
      setOpportunityDesc(opportunityData.description);
      setOpportunityTitle(opportunityData.opportunity_name);
      setTimeout(() => {
        getOpportunityDetails();
      }, 6000);
    }
  }, []);

  const getOpportunityDetails = async () => {
    setIsLoading(true);
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url =
      'pbv/v1/opportunity_detail?opportunity_id=' +
      opportunityData.opportunity_id;
    axiosInstance
      .get(url, {}, config)
      .then(async response => {
        console_log(
          `getOpportunityDetails response :`,
          JSON.stringify(response, null, 2),
        );
        let data = response.data.data;

        if (data.jurisdiction.length > 0 && itemsJurisdiction.length > 0) {
          let to_show = [];
          let to_set = [];
          // console.log('itemsJurisdiction: ', itemsJurisdiction);
          itemsJurisdiction.map(element => {
            if (data.jurisdiction.indexOf(element.label) > -1) {
              to_show.push(element.label);
              to_set.push(element.value);
            }
          });
          setJurisdictionSelectedShow(to_show.join(', '));
          // console.log('to_show: ', to_show);
          setValueJurisdiction(to_set);
          // console.log('to_set: ', to_set);
        }
        if (data.lawyer_role.length > 0 && props.lawyerRoleList.length > 0) {
          let to_show = [];
          let to_set = [];
          props.lawyerRoleList.map(element => {
            if (data.lawyer_role.indexOf(element.value) > -1) {
              to_show.push(element.label);
              to_set.push(element.value);
            }
          });
          setLawyerRoleSelectedShow(to_show.join(', '));
          setValueLawyerRole(to_set);
        }
        if (data.areapractice.length > 0 && props.areaPracticeList.length > 0) {
          let to_show = [];
          let to_set = [];
          props.areaPracticeList.map(element => {
            if (data.areapractice.indexOf(element.label) > -1) {
              to_show.push(element.label);
              to_set.push(element.value);
            }
          });
          setAreaSelectedShow(to_show.join(', '));
          setValueAreaPractice(to_set);
        }
        if (
          data.industry_sector.length > 0 &&
          props.industrySectorList.length > 0
        ) {
          let to_show = [];
          let to_set = [];
          props.industrySectorList.map(element => {
            if (data.industry_sector.indexOf(element.label) > -1) {
              to_show.push(element.label);
              to_set.push(element.value);
            }
          });
          setIndustrySectorSelectedShow(to_show.join(', '));
          setValueIndustrySector(to_set);
        }
        if (
          data.client_dimension.length > 0 &&
          props.clientDimensionList.length > 0
        ) {
          let to_show = [];
          let to_set = [];
          props.clientDimensionList.map(element => {
            if (data.client_dimension.indexOf(element.label) > -1) {
              to_show.push(element.label);
              to_set.push(element.value);
            }
          });
          setClientDimensionSelectedShow(to_show.join(', '));
          setValueClientDimension(to_set);
        }
        if (
          data.deal_dimension.length > 0 &&
          props.dealCaseDimensionList.length > 0
        ) {
          let to_show = [];
          let to_set = [];
          props.dealCaseDimensionList.map(element => {
            if (data.deal_dimension.indexOf(element.label) > -1) {
              to_show.push(element.label);
              to_set.push(element.value);
            }
          });
          setDealCaseDimensionSelectedShow(to_show.join(', '));
          setValueDealCaseDimension(to_set);
        }
        setTimeout(() => {
          if (data.town.length > 0 && itemsTown.length > 0) {
            let to_show = [];
            let to_set = [];
            itemsTown.map(element => {
              if (data.town.indexOf(element.label) > -1) {
                to_show.push(element.label);
                to_set.push(element.value);
              }
            });
            setTownSelectedShow(to_show.join(', '));
            setValueTown(to_set);
          }
          if (
            data.industry_segment.length > 0 &&
            itemsIndustrySegment.length > 0
          ) {
            let to_show = [];
            let to_set = [];
            itemsIndustrySegment.map(element => {
              if (data.industry_segment.indexOf(element.label) > -1) {
                to_show.push(element.label);
                to_set.push(element.value);
              }
            });
            setIndustrySegmentSelectedShow(to_show.join(', '));
            setValueIndustrySegment(to_set);
          }
          if (data.service_line.length > 0 && itemsServiceLine.length > 0) {
            let to_show = [];
            let to_set = [];
            itemsServiceLine.map(element => {
              if (data.service_line.indexOf(element.label) > -1) {
                to_show.push(element.label);
                to_set.push(element.value);
              }
            });
            setServiceLineSelectedShow(to_show.join(', '));
            setValueServiceLine(to_set);
          }
        }, 6000);

        setIsLoading(false);
        dispatch(setLoader(false));
      })
      .catch(function (error) {
        console_log(
          'getOpportunityDetails error: ',
          JSON.stringify(error, null, 2),
        );
        // setIsLoading(false);
      });
  };
  const [isLoading, setIsLoading] = useState(true);

  const user_id = Store.getState().AuthenticationReducer.userId;
  let is_create_opportunity = props.route.params.createOpportunity;
  let is_edit = props.route.params.isEdit;
  // let opportunityData = props?.route?.params?.opportunityData;

  const [opportunityData, setOpportunityData] = useState(
    props?.route?.params?.opportunityData,
  );

  const [searchedList, setSearchedList] = useState([]);
  const [opportunityTitle, setOpportunityTitle] = useState('');
  const [opportunityDesc, setOpportunityDesc] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvSelected, setCvSelected] = useState({name: ''});

  const [isOpen, setIsOpen] = useState(0);

  const [valueLawyerRole, setValueLawyerRole] = useState([]);
  const [valueJurisdiction, setValueJurisdiction] = useState([]);
  const [valueTown, setValueTown] = useState([]);
  const [valueAreaPractice, setValueAreaPractice] = useState([]);
  const [valueServiceLine, setValueServiceLine] = useState([]);
  const [valueIndustrySector, setValueIndustrySector] = useState([]);
  const [valueIndustrySegment, setValueIndustrySegment] = useState([]);
  const [valueClientDimension, setValueClientDimension] = useState([]);
  const [valueDealCaseDimension, setValueDealCaseDimension] = useState([]);

  // const [areaErrorText, setAreaErrorText] = useState('');
  // const [industryErrorText, setIndustryErrorText] = useState('');

  const [areaSelectedShow, setAreaSelectedShow] = useState('');
  const [jurisdictionSelectedShow, setJurisdictionSelectedShow] = useState('');
  const [townSelectedShow, setTownSelectedShow] = useState('');
  const [industrySectorSelectedShow, setIndustrySectorSelectedShow] =
    useState('');
  const [serviceLineSelectedShow, setServiceLineSelectedShow] = useState('');
  const [industrySegmentSelectedShow, setIndustrySegmentSelectedShow] =
    useState('');
  const [clientDimensionSelectedShow, setClientDimensionSelectedShow] =
    useState('');
  const [dealCaseDimensionSelectedShow, setDealCaseDimensionSelectedShow] =
    useState('');

  const [lawyerRoleSelectedShow, setLawyerRoleSelectedShow] = useState('');

  const [itemsJurisdiction, setItemsJurisdiction] = useState([]);
  const [itemsTown, setItemsTown] = useState([
    // {label: 'INDIA', value: 'INDIA'},
  ]);
  const [itemsServiceLine, setItemsServiceLine] = useState([]);
  const [itemsIndustrySegment, setItemsIndustrySegment] = useState([]);

  // useEffect(() => {
  //   console.log('props.clientDimensionList: ', props.clientDimensionList);
  // }, [props.clientDimensionList]);

  useEffect(() => {
    if (valueJurisdiction != []) {
      // console.log('valueJurisdiction: ', valueJurisdiction);
      getJuriTowns();
    }
  }, [valueJurisdiction]);
  useEffect(() => {
    if (valueAreaPractice != []) {
      getServiceLine();
    }
  }, [valueAreaPractice]);
  useEffect(() => {
    if (valueIndustrySector != []) {
      getIndustrySegment();
    }
  }, [valueIndustrySector]);
  const getJuriList = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url = 'pbv/v1/jurisdiction';
    axiosInstance
      .get(url, {}, config)
      .then(async response => {
        console_log(
          'getJuriList response: ',
          JSON.stringify(response, null, 2),
        );
        if (response.status == 200) {
          let raw_data = response.data.data;
          let data_set = [];

          raw_data.map((element, index) => {
            let obj = {
              value: element.country_code,
              label: element.country_name,
            };
            data_set[index] = obj;
          });
          setItemsJurisdiction(data_set);
        }
      })
      .catch(function (error) {
        dispatch(setLoader(false));
        console_log('getJuriList error: ', JSON.stringify(error, null, 2));
        // let error_code = error.response.data.code;
        // handle error
      });
  };
  const getJuriTowns = async () => {
    console.log('valueJurisdiction: ', valueJurisdiction);
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    //improvementRequired pass multiple jurisdiction
    let url = 'pbv/v1/town?jurisdiction=' + valueJurisdiction.toString();

    axiosInstance
      .get(url, {}, config)
      .then(async response => {
        console_log(
          'getJuriTowns response: ',
          JSON.stringify(response, null, 2),
        );
        if (response.status == 200) {
          let raw_data = response.data.data;
          let data_set = [];

          raw_data.map((element, index) => {
            let obj = {
              value: element.id,
              label: element.state_name,
            };
            if (
              element.location_tbl_town !== '' &&
              element.location_tbl_town !== null
            ) {
              data_set.push(obj);
            }
          });
          data_set.reverse();
          setItemsTown(data_set);
        }
      })
      .catch(function (error) {
        dispatch(setLoader(false));
        console_log('getJuriTowns error: ', JSON.stringify(error, null, 2));
        // let error_code = error.response.data.code;
        // handle error
      });
  };
  const getServiceLine = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url =
      'pbv/v1/service_line?area_practice=' + valueAreaPractice.toString();
    axiosInstance
      .get(url, {}, config)
      .then(async response => {
        console_log(
          'getServiceLine response: ',
          JSON.stringify(response, null, 2),
        );
        if (response.status == 200) {
          let raw_data = response.data.data;
          let data_set = [];
          raw_data.map((element, index) => {
            let obj = {
              label: element.nome_tbl_areapractice_sub,
              value: element.ID_tbl_areapractice_sub,
            };
            data_set[index] = obj;
          });
          setItemsServiceLine(data_set);
        }
      })
      .catch(function (error) {
        dispatch(setLoader(false));
        console_log('getServiceLine error: ', JSON.stringify(error, null, 2));
        // let error_code = error.response.data.code;
        // handle error
      });
  };
  const getIndustrySegment = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url =
      'pbv/v1/industry_segment?industry=' + valueIndustrySector.toString();
    axiosInstance
      .get(url, {}, config)
      .then(async response => {
        console_log(
          'getIndustrySegment response: ',
          JSON.stringify(response, null, 2),
        );
        if (response.status == 200) {
          let raw_data = response.data.data;
          let data_set = [];
          raw_data.map((element, index) => {
            let obj = {
              label: element.nome_tbl_industry_segment,
              value: element.ID_tbl_industry_segment,
            };
            data_set[index] = obj;
          });
          setItemsIndustrySegment(data_set);
        }
      })
      .catch(function (error) {
        dispatch(setLoader(false));
        console_log(
          'getIndustrySegment error: ',
          JSON.stringify(error, null, 2),
        );
        // let error_code = error.response.data.code;
        // handle error
      });
  };
  const PostOpportunity = async () => {
    // let area_to_pass = '';
    // valueAreaPractice.map(value => {
    //   area_to_pass = area_to_pass + '&opportunity_areapractice[]=' + value;
    // });
    // console.log('area_to_pass: ', area_to_pass);
    let opportunity_id = '';
    if (is_edit) {
      opportunity_id = opportunityData.opportunity_id;
    }
    let url_to_pass = is_edit
      ? 'pbv/v1/update_opportunity'
      : 'pbv/v1/create_new_opportunity';
    let url =
      url_to_pass +
      '?opportunity_title=' +
      opportunityTitle +
      opportunity_id +
      '&opportunity_desc=' +
      opportunityDesc +
      '&opportunity_expire_date=' +
      expirationDate +
      '&opportunity_areapractice=' +
      valueAreaPractice.toString() +
      // '&lawyer_selected=' +
      // +
      '&opportunity_lawyer_role=' +
      valueLawyerRole +
      '&opportunity_service_line=' +
      valueServiceLine.toString() +
      '&opportunity_industry_sector=' +
      valueIndustrySector.toString() +
      '&opportunity_industry_segment=' +
      valueIndustrySegment.toString() +
      '&opportunity_client_dimension=' +
      valueClientDimension +
      '&opportunity_deal_dimension=' +
      valueDealCaseDimension +
      '&opportunity_jurisdiction=' +
      valueJurisdiction.toString() +
      '&opportunity_town=' +
      valueTown.toString() +
      '&opportunity_industry=' +
      // va+
      // +
      '&user_id=' +
      user_id;
    console.log('url: ', url);
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
          setTownSelectedShow('');
          setJurisdictionSelectedShow('');
          setServiceLineSelectedShow('');
          setIndustrySectorSelectedShow('');
          setIndustrySegmentSelectedShow('');
          setClientDimensionSelectedShow('');
          setDealCaseDimensionSelectedShow('');

          setValueJurisdiction(null);
          setValueTown(null);
          setValueAreaPractice(null);
          setValueLawyerRole(null);
          setValueServiceLine(null);
          setValueIndustrySector(null);
          setValueIndustrySegment(null);
          setValueClientDimension(null);
          setValueDealCaseDimension(null);

          dispatch(setLoader(false));
          Alert.alert(
            `Opportunity ${is_edit ? 'updated' : 'created'} successfully.`,
          );
        }
      })
      .catch(function (error) {
        dispatch(setLoader(false));
        console_log('PostOpportunity error: ', JSON.stringify(error, null, 2));
        // let error_code = error.response.data.code;
        // handle error
      });
  };
  const searchOpportunities = async () => {
    let url =
      'pbv/v1/search_opportunities' +
      '?opportunity_lawyer_role=' +
      valueLawyerRole +
      '&opportunity_jurisdiction=' +
      valueJurisdiction +
      '&opportunity_town=' +
      valueTown +
      '&opportunity_areapractice=' +
      valueAreaPractice +
      '&opportunity_industry_sector=' +
      valueIndustrySector +
      '&opportunity_client_dimension=' +
      valueClientDimension +
      '&opportunity_deal_dimension=' +
      valueDealCaseDimension;
    console.log('url: ', url);
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    axiosInstance
      .get(url, {}, config)
      .then(async response => {
        console_log(
          'searchOpportunities response: ',
          JSON.stringify(response, null, 2),
        );
        if (response.status == 200) {
          let raw_data = response.data.data;
          setSearchedList(raw_data);
          // dispatch(setLoader(false));
        }
      })
      .catch(function (error) {
        dispatch(setLoader(false));
        console_log(
          'searchOpportunities error: ',
          JSON.stringify(error, null, 2),
        );
        // let error_code = error.response.data.code;
        // handle error
      });
  };
  // const ViewLoader = props => {
  //   return (
  //     <View
  //       style={[
  //         Styles.DropDownPicker,
  //         {
  //           alignItems: 'center',
  //           flexDirection: 'row',
  //           justifyContent: 'space-between',
  //           paddingHorizontal: 10,
  //         },
  //       ]}>
  //       <Text style={Styles.placeholderStyle}>{props.placeholder}</Text>
  //     </View>
  //   );
  // };
  const ViewLoader = props => {
    return null;
  };
  const validate = () => {
    // console.log('valueJurisdiction: ', valueJurisdiction);
    // console.log('valueAreaPractice: ', valueAreaPractice);
    // console.log('valueIndustrySegment: ', valueIndustrySector);
    if (
      (opportunityTitle == '' ||
        opportunityDesc == '' ||
        expirationDate == '' ||
        valueJurisdiction == [] ||
        valueAreaPractice == [] ||
        valueIndustrySector == []) &&
      is_create_opportunity
    ) {
      // Alert.alert('Either Area practice Or Industry field is required.');
      Alert.alert('Please fill and select required field.');
    } else {
      is_create_opportunity ? PostOpportunity() : searchOpportunities();
    }
  };
  const renderOpportunity = ({item}) => {
    return (
      <OpportunityView
        item={item}
        currentTab={NAVIGATION.SEARCH_OPPORTUNITIES}
        refreshOpportunity={() => {
          // getNewOpportunities();
        }}
        navigation={props.navigation}
      />
    );
  };
  return (
    <>
      <CustomSafeAreaView backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          zIndex: 0,
        }}>
        <ScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          style={{zIndex: 0}}>
          {is_create_opportunity ? (
            <>
              {is_edit ? (
                <>
                  <Text
                    style={{marginLeft: 20, marginBottom: 10}}
                    onPress={() => {
                      props.navigation.navigate(NAVIGATION.PROFILE);
                    }}>
                    Back
                  </Text>
                  <Text style={Styles.text_home}>Edit Opportunity</Text>
                </>
              ) : (
                <>
                  <CustomHeader navigation={props.navigation} {...props} />
                  <Text style={Styles.text_home}>Opportunity</Text>
                </>
              )}
            </>
          ) : null}
          <View style={Styles.view_search_member}>
            {is_create_opportunity ? (
              <>
                <Text style={Styles.text_search_member}>
                  {is_edit ? '' : 'Create Opportunity'}
                </Text>
                <Text style={Styles.title_text}>Opportunity Title*</Text>
                <TextInput
                  value={opportunityTitle}
                  onChangeText={text => {
                    setOpportunityTitle(text);
                  }}
                  placeholder="Opportunity Title"
                  placeholderTextColor={Colors.border_color}
                  style={Styles.TextInput_search_member}
                />
                <Text style={Styles.title_text}>Opportunity Desc*</Text>
                <TextInput
                  value={opportunityDesc}
                  onChangeText={text => {
                    setOpportunityDesc(text);
                  }}
                  placeholder="Opportunity Desc"
                  placeholderTextColor={Colors.border_color}
                  style={Styles.TextInput_search_member}
                />
                <Text style={Styles.title_text}>Expiration Date*</Text>
                <TextInput
                  value={expirationDate}
                  onFocus={() => {
                    setIsOpen(11);
                  }}
                  onChangeText={text => {
                    // setExpirationDate(text);
                  }}
                  placeholder="DD-MM-YYYY"
                  placeholderTextColor={Colors.border_color}
                  style={Styles.TextInput_search_member}
                />
              </>
            ) : null}
            <View style={{zIndex: 10, flex: 1}}>
              <Text style={Styles.title_text}>Lawyer Role</Text>
              <DropDownPicker
                open={isOpen == 10}
                value={valueLawyerRole}
                onChangeValue={value => {
                  let to_show = [];
                  if (value !== null && value.length > 0) {
                    props.lawyerRoleList.map(element => {
                      if (value.indexOf(element.value) > -1) {
                        to_show.push(element.label);
                      }
                    });
                  }
                  setLawyerRoleSelectedShow(to_show.join(', '));
                }}
                multiple={true}
                multipleText={lawyerRoleSelectedShow}
                items={props.lawyerRoleList}
                setOpen={value => setIsOpen(value ? 10 : 0)}
                setValue={setValueLawyerRole}
                placeholder={'Please Select Lawyer Role'}
                listMode={'SCROLLVIEW'}
                placeholderStyle={Styles.placeholderStyle}
                style={Styles.DropDownPicker}
                dropDownContainerStyle={Styles.dropDownContainerStyle}
                textStyle={Styles.textStyle}
                arrowIconStyle={{tintColor: Colors.border_color}}
                // labelStyle={Styles.labelStyle}
              />
              <View style={{zIndex: 9, flex: 1}}>
                {itemsJurisdiction.length > 0 ? (
                  <>
                    <Text style={Styles.title_text}>
                      Jurisdiction{is_create_opportunity ? '*' : ''}
                    </Text>
                    <DropDownPicker
                      searchable
                      searchPlaceholder="Type a search text"
                      open={isOpen == 8}
                      value={valueJurisdiction}
                      items={itemsJurisdiction}
                      setOpen={value => setIsOpen(value ? 8 : 0)}
                      setValue={setValueJurisdiction}
                      multiple={true}
                      multipleText={jurisdictionSelectedShow}
                      onChangeValue={value => {
                        let to_show = [];
                        if (value !== null && value.length > 0) {
                          itemsJurisdiction.map(element => {
                            if (value.indexOf(element.value) > -1) {
                              to_show.push(element.label);
                            }
                          });
                        }
                        setJurisdictionSelectedShow(to_show.join(', '));
                      }}
                      placeholder={'Please Select Jurisdiction'}
                      listMode={'SCROLLVIEW'}
                      placeholderStyle={Styles.placeholderStyle}
                      style={Styles.DropDownPicker}
                      dropDownContainerStyle={Styles.dropDownContainerStyle}
                      textStyle={Styles.textStyle}
                      arrowIconStyle={{tintColor: Colors.border_color}}
                    />
                  </>
                ) : (
                  <ViewLoader placeholder={'Please Select Jurisdiction'} />
                )}
                <View style={{zIndex: 7, flex: 1}}>
                  {itemsTown.length > 0 ? (
                    <>
                      <Text style={Styles.title_text}>Town</Text>
                      <DropDownPicker
                        searchable
                        searchPlaceholder="Type a search text"
                        open={isOpen == 7}
                        value={valueTown}
                        items={itemsTown}
                        setOpen={value => setIsOpen(value ? 7 : 0)}
                        setValue={setValueTown}
                        multiple={true}
                        multipleText={townSelectedShow}
                        onChangeValue={value => {
                          let to_show = [];
                          if (value !== null && value.length > 0) {
                            itemsTown.map(element => {
                              if (value.indexOf(element.value) > -1) {
                                to_show.push(element.label);
                              }
                            });
                          }
                          setTownSelectedShow(to_show.join(', '));
                        }}
                        placeholder={'Please Select Town'}
                        listMode={'SCROLLVIEW'}
                        placeholderStyle={Styles.placeholderStyle}
                        style={Styles.DropDownPicker}
                        dropDownContainerStyle={Styles.dropDownContainerStyle}
                        textStyle={Styles.textStyle}
                        arrowIconStyle={{tintColor: Colors.border_color}}
                      />
                    </>
                  ) : (
                    <ViewLoader placeholder={'Please Select Town'} />
                  )}
                  <View style={{zIndex: 6, flex: 1}}>
                    <Text style={Styles.title_text}>
                      Practice{is_create_opportunity ? '*' : ''}
                    </Text>
                    <DropDownPicker
                      searchable
                      searchPlaceholder="Type a search text"
                      open={isOpen == 6}
                      setOpen={value => setIsOpen(value ? 6 : 0)}
                      value={valueAreaPractice}
                      items={props.areaPracticeList}
                      onChangeValue={value => {
                        let to_show = [];
                        if (value !== null && value.length > 0) {
                          props.areaPracticeList.map(element => {
                            if (value.indexOf(element.value) > -1) {
                              to_show.push(element.label);
                            }
                          });
                        }
                        setAreaSelectedShow(to_show.join(', '));
                      }}
                      multiple={true}
                      multipleText={areaSelectedShow}
                      setValue={setValueAreaPractice}
                      placeholder={'Please Select practice'}
                      listMode={'SCROLLVIEW'}
                      placeholderStyle={Styles.placeholderStyle}
                      style={Styles.DropDownPicker}
                      dropDownContainerStyle={Styles.dropDownContainerStyle}
                      textStyle={Styles.textStyle}
                      arrowIconStyle={{tintColor: Colors.border_color}}
                    />
                    {/* {areaErrorText == '' ? null : <Text style={Styles.errorText}>{areaErrorText}</Text>} */}
                    <View style={{zIndex: 5, flex: 1}}>
                      {itemsServiceLine.length > 0 ? (
                        <>
                          <Text style={Styles.title_text}>Service Line</Text>
                          <DropDownPicker
                            searchable
                            searchPlaceholder="Type a search text"
                            open={isOpen == 5}
                            setOpen={value => setIsOpen(value ? 5 : 0)}
                            value={valueServiceLine}
                            items={itemsServiceLine}
                            setValue={setValueServiceLine}
                            multiple={true}
                            multipleText={serviceLineSelectedShow}
                            onChangeValue={value => {
                              let to_show = [];
                              if (value !== null && value.length > 0) {
                                itemsServiceLine.map(element => {
                                  if (value.indexOf(element.value) > -1) {
                                    to_show.push(element.label);
                                  }
                                });
                              }
                              setServiceLineSelectedShow(to_show.join(', '));
                            }}
                            placeholder={'Please Select Service Line'}
                            listMode={'SCROLLVIEW'}
                            placeholderStyle={Styles.placeholderStyle}
                            style={Styles.DropDownPicker}
                            dropDownContainerStyle={
                              Styles.dropDownContainerStyle
                            }
                            textStyle={Styles.textStyle}
                            arrowIconStyle={{tintColor: Colors.border_color}}
                          />
                        </>
                      ) : (
                        <ViewLoader
                          placeholder={'Please Select Service Line'}
                        />
                      )}
                      <View style={{zIndex: 4, flex: 1}}>
                        <Text style={Styles.title_text}>
                          Industry Sector{is_create_opportunity ? '*' : ''}
                        </Text>
                        <DropDownPicker
                          searchable
                          searchPlaceholder="Type a search text"
                          open={isOpen == 4}
                          setOpen={value => setIsOpen(value ? 4 : 0)}
                          value={valueIndustrySector}
                          items={props.industrySectorList}
                          setValue={setValueIndustrySector}
                          multiple={true}
                          multipleText={industrySectorSelectedShow}
                          onChangeValue={value => {
                            let to_show = [];
                            if (value !== null && value.length > 0) {
                              props.industrySectorList.map(element => {
                                if (value.indexOf(element.value) > -1) {
                                  to_show.push(element.label);
                                }
                              });
                            }
                            setIndustrySectorSelectedShow(to_show.join(', '));
                          }}
                          placeholder={'Please Select Industry Sector'}
                          listMode={'SCROLLVIEW'}
                          placeholderStyle={Styles.placeholderStyle}
                          style={Styles.DropDownPicker}
                          dropDownContainerStyle={Styles.dropDownContainerStyle}
                          textStyle={Styles.textStyle}
                          arrowIconStyle={{tintColor: Colors.border_color}}
                        />
                        <View style={{zIndex: 3, flex: 1}}>
                          {itemsIndustrySegment.length > 0 ? (
                            <>
                              <Text style={Styles.title_text}>
                                Industry Segment
                                {is_create_opportunity ? '*' : ''}
                              </Text>
                              <DropDownPicker
                                searchable
                                searchPlaceholder="Type a search text"
                                open={isOpen == 3}
                                setOpen={value => setIsOpen(value ? 3 : 0)}
                                value={valueIndustrySegment}
                                items={itemsIndustrySegment}
                                setValue={setValueIndustrySegment}
                                multiple={true}
                                multipleText={industrySegmentSelectedShow}
                                onChangeValue={value => {
                                  let to_show = [];
                                  if (value !== null && value.length > 0) {
                                    itemsIndustrySegment.map(element => {
                                      if (value.indexOf(element.value) > -1) {
                                        to_show.push(element.label);
                                      }
                                    });
                                  }
                                  setIndustrySegmentSelectedShow(
                                    to_show.join(', '),
                                  );
                                }}
                                placeholder={'Please Select Industry Segment'}
                                listMode={'SCROLLVIEW'}
                                placeholderStyle={Styles.placeholderStyle}
                                style={Styles.DropDownPicker}
                                dropDownContainerStyle={
                                  Styles.dropDownContainerStyle
                                }
                                textStyle={Styles.textStyle}
                                arrowIconStyle={{
                                  tintColor: Colors.border_color,
                                }}
                              />
                            </>
                          ) : (
                            <ViewLoader
                              placeholder={'Please Select Industry Segment'}
                            />
                          )}
                          <View style={{zIndex: 2, flex: 1}}>
                            {props.clientDimensionList.length > 0 ? (
                              <>
                                <Text style={Styles.title_text}>
                                  Client Dimension
                                </Text>
                                <DropDownPicker
                                  open={isOpen == 2}
                                  setOpen={value => setIsOpen(value ? 2 : 0)}
                                  value={valueClientDimension}
                                  items={props.clientDimensionList}
                                  setValue={setValueClientDimension}
                                  multiple={true}
                                  multipleText={clientDimensionSelectedShow}
                                  onChangeValue={value => {
                                    let to_show = [];
                                    if (value !== null && value.length > 0) {
                                      props.clientDimensionList.map(element => {
                                        if (value.indexOf(element.value) > -1) {
                                          to_show.push(element.label);
                                        }
                                      });
                                    }
                                    setClientDimensionSelectedShow(
                                      to_show.join(', '),
                                    );
                                  }}
                                  placeholder={'Please Select Client Dimension'}
                                  listMode={'SCROLLVIEW'}
                                  placeholderStyle={Styles.placeholderStyle}
                                  style={Styles.DropDownPicker}
                                  dropDownContainerStyle={
                                    Styles.dropDownContainerStyle
                                  }
                                  textStyle={Styles.textStyle}
                                  arrowIconStyle={{
                                    tintColor: Colors.border_color,
                                  }}
                                />
                              </>
                            ) : (
                              <ViewLoader
                                placeholder={'Please Select Client Dimension'}
                              />
                            )}
                            <View style={{zIndex: 1, flex: 1}}>
                              <Text style={Styles.title_text}>
                                Deal / Case Dimension
                              </Text>
                              <DropDownPicker
                                open={isOpen == 1}
                                setOpen={value => setIsOpen(value ? 1 : 0)}
                                value={valueDealCaseDimension}
                                items={props.dealCaseDimensionList}
                                setValue={setValueDealCaseDimension}
                                multiple={true}
                                multipleText={dealCaseDimensionSelectedShow}
                                onChangeValue={value => {
                                  let to_show = [];
                                  if (value !== null && value.length > 0) {
                                    props.dealCaseDimensionList.map(element => {
                                      if (value.indexOf(element.value) > -1) {
                                        to_show.push(element.label);
                                      }
                                    });
                                  }
                                  setDealCaseDimensionSelectedShow(
                                    to_show.join(', '),
                                  );
                                }}
                                placeholder={
                                  'Please Select Deal / Case Dimension'
                                }
                                listMode={'SCROLLVIEW'}
                                placeholderStyle={Styles.placeholderStyle}
                                style={Styles.DropDownPicker}
                                dropDownContainerStyle={[
                                  Styles.dropDownContainerStyle,
                                  {
                                    zindex: 1,
                                    position: 'relative',
                                    marginTop: -45,
                                  },
                                ]}
                                textStyle={Styles.textStyle}
                                arrowIconStyle={{
                                  tintColor: Colors.border_color,
                                }}
                              />

                              {is_create_opportunity ? (
                                <>
                                  <Text style={Styles.title_text}>
                                    Attach here your file
                                  </Text>
                                  <View
                                    style={{
                                      // backgroundColor: '#e3e3e3',
                                      borderWidth: 1,
                                      borderColor: '#d3d3d3',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      padding: 10,
                                      borderRadius: 5,
                                    }}>
                                    <TouchableOpacity
                                      style={{
                                        borderWidth: 1,
                                        borderColor: Colors.black,
                                        backgroundColor: Colors.grey,
                                        paddingHorizontal: 20,
                                        borderRadius: 5,
                                        paddingVertical: 5,
                                      }}
                                      activeOpacity={0.8}
                                      onPress={async () => {
                                        let response =
                                          await DocumentPicker.pick({
                                            allowMultiSelection: false,
                                            // type: [DocumentPicker.types.pdf],
                                          });
                                        // console.log(
                                        //   'DocumentPicker response: ',
                                        //   JSON.stringify(response, null, 2),
                                        // );
                                        setCvSelected(response[0]);
                                      }}>
                                      <Text
                                        style={[
                                          {
                                            color: Colors.black,
                                            fontSize: 12,
                                          },
                                        ]}>
                                        {'Choose File'}
                                      </Text>
                                    </TouchableOpacity>
                                    <Text
                                      style={[
                                        {
                                          color: Colors.black,
                                          fontSize: 12,
                                          marginLeft: 10,
                                        },
                                      ]}>
                                      {cvSelected.name !== ''
                                        ? cvSelected.name
                                        : 'No file chooen'}
                                    </Text>
                                  </View>
                                </>
                              ) : null}
                              <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                  validate();
                                }}
                                style={[
                                  Styles.view_load_more,
                                  {
                                    marginTop: 50,
                                  },
                                ]}>
                                <Text style={Styles.text_load_more}>
                                  {is_edit
                                    ? 'EDIT OPPORTUNITY'
                                    : is_create_opportunity
                                    ? 'CREATE OPPORTUNITY'
                                    : 'SEARCH OPPORTUNITY'}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {!is_edit && !is_create_opportunity ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={searchedList}
                renderItem={renderOpportunity}
                keyExtractor={item => item.id}
                // ListEmptyComponent={() => {
                //   return <EmptyList />;
                // }}
              />
            ) : null}
          </View>
          <DatePicker
            modal
            mode="date"
            open={isOpen == 11}
            date={
              expirationDate == ''
                ? new Date()
                : new Date(moment(expirationDate, 'DD-MM-YYYY'))
            }
            onConfirm={date => {
              setIsOpen(0);
              setExpirationDate(moment(date).format('DD-MM-YYYY'));
            }}
            onCancel={() => {
              setIsOpen(0);
            }}
          />
        </ScrollView>
      </View>
    </>
  );
};
const mapStateToProps = state => ({
  // jurisdictionList: state.InfoReducer.jurisdictionList,
  areaPracticeList: state.InfoReducer.areaPracticeList,
  // townList: state.InfoReducer.townList,
  industrySectorList: state.InfoReducer.industryList,
  ////////////////////////////////
  lawyerRoleList: state.InfoReducer.lawyerRoleList,
  clientDimensionList: state.InfoReducer.clientDimensionList,
  dealCaseDimensionList: state.InfoReducer.dealCaseDimensionList,
  // serviceLineList: state.InfoReducer.serviceLineList,
  // lawyerList: state.InfoReducer.lawyerList,
});
export default connect(mapStateToProps)(CreateOpportunity);
