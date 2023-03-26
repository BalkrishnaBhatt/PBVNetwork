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
} from 'react-native';
import {CustomSafeAreaView, CustomHeader} from '../../../components';
import {Colors} from '../../../utils/colors';
import Styles from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect, useSelector, useDispatch} from 'react-redux';
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

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const CreateOpportunity = props => {
  const dispatch = useDispatch();
  // let InfoReducer = useSelector(state => state.InfoReducer);
  // useEffect(() => {
  //   if (InfoReducer !== undefined) {
  //     setItemsJurisdiction(InfoReducer.jurisdictionList);
  //     setItemsAreaPractice(InfoReducer.areaPractice);
  //     setItemsTown(InfoReducer.townList);
  //     setItemsIndustry(InfoReducer.industryList);
  //     setIsLoading(InfoReducer.isLoading);
  //   }
  // }, [InfoReducer]);
  useEffect(() => {
    // dispatch(getJurisdictionList(props.navigation));
    dispatch(getAreaOfPracticeList(props.navigation));
    dispatch(getIndustryList(props.navigation));
    /////////////////////////////
    dispatch(getLawyerRoleList(props.navigation));
    dispatch(getClientDimensionList(props.navigation));
    dispatch(getDealCaseDimensionList(props.navigation));
    getJuriList();
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  const user_id = Store.getState().AuthenticationReducer.userId;
  let is_create_opportunity = props.route.params.createOpportunity;

  const [opportunityTitle, setOpportunityTitle] = useState('');
  const [opportunityDesc, setOpportunityDesc] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

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
              value: element.id,
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
              value: element.ID_tbl_town,
              label: element.location_tbl_town,
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
    let url =
      'pbv/v1/create_new_opportunity' +
      '?opportunity_title=' +
      opportunityTitle +
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
      '&opportunity_industry[]=' +
      // va+
      // +
      '&user_id=' +
      user_id;
    // console.log('url: ', url);
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
      '&opportunity_lawyer_role=' +
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
          // setOpportunityTitle('');
          // setOpportunityDesc('');
          // setExpirationDate('');
          // setAreaSelectedShow('');
          // setTownSelectedShow('');
          // setJurisdictionSelectedShow('');
          // setServiceLineSelectedShow('');
          // setIndustrySectorSelectedShow('');
          // setIndustrySegmentSelectedShow('');
          // setClientDimensionSelectedShow('');
          // setDealCaseDimensionSelectedShow('');

          // setValueJurisdiction(null);
          // setValueTown(null);
          // setValueAreaPractice(null);
          // setValueLawyerRole(null);
          // setValueServiceLine(null);
          // setValueIndustrySector(null);
          // setValueIndustrySegment(null);
          // setValueClientDimension(null);
          // setValueDealCaseDimension(null);

          dispatch(setLoader(false));
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
              <CustomHeader
                navigation={props.navigation}
                {...props}></CustomHeader>
              <Text style={Styles.text_home}>Opportunity</Text>
            </>
          ) : null}
          <View style={Styles.view_search_member}>
            {is_create_opportunity ? (
              <>
                <Text style={Styles.text_search_member}>
                  Create Opportunity
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
                  onChangeText={text => {
                    setExpirationDate(text);
                  }}
                  placeholder="Expiration Date"
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
                          open={isOpen == 4}
                          setOpen={value => setIsOpen(value ? 4 : 0)}
                          value={valueIndustrySector}
                          items={props.industryList}
                          setValue={setValueIndustrySector}
                          multiple={true}
                          multipleText={industrySectorSelectedShow}
                          onChangeValue={value => {
                            let to_show = [];
                            if (value !== null && value.length > 0) {
                              props.industryList.map(element => {
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
                                  {is_create_opportunity
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
          </View>
        </ScrollView>
      </View>
    </>
  );
};
const mapStateToProps = state => ({
  // jurisdictionList: state.InfoReducer.jurisdictionList,
  areaPracticeList: state.InfoReducer.areaPracticeList,
  // townList: state.InfoReducer.townList,
  industryList: state.InfoReducer.industryList,
  ////////////////////////////////
  lawyerRoleList: state.InfoReducer.lawyerRoleList,
  clientDimensionList: state.InfoReducer.clientDimensionList,
  dealCaseDimensionList: state.InfoReducer.dealCaseDimensionList,
  // serviceLineList: state.InfoReducer.serviceLineList,
  // lawyerList: state.InfoReducer.lawyerList,
});
export default connect(mapStateToProps)(CreateOpportunity);
