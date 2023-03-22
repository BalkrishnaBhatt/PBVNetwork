/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect, useState} from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import axiosInstance from '../../axios';
import {console_log} from '../../utils/loggers';
import {Store} from '../../redux/store';
import DocumentPicker from 'react-native-document-picker';
import {useSelector, useDispatch} from 'react-redux';
import {setLoader, getUserProfile} from '../../redux/actions';

import HTML from 'react-native-render-html';
import {
  FavouriteSymbol,
  CommentsSymbol,
  DeleteSymbol,
  SaveSymbol,
  CloseSymbol,
} from '../../utils/svg';
import {EMAIL_PATTERN} from '../../constant';
import ImagePickerComponent from '../ImagePickerComponent';
const OpportunityView = ({
  item,
  currentTab = 0,
  refreshOpportunity = () => null,
}) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [opportunityDetail, setOpportunityDetails] = useState({});
  const [showAppliedList, setShowAppliedList] = useState(false);
  const [appliedList, setAppliedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cvSelected, setCvSelected] = useState({name: ''});
  const user_id = Store.getState().AuthenticationReducer.userId;
  const text_style = {
    fontSize: 12,
    color: Colors.black,
    fontFamily: Fonts.Regular_font,
    fontWeight: '300',
    marginTop: 5,
  };
  const getOpportunityDetails = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url = 'pbv/v1/opportunity_detail?opportunity_id=';
    axiosInstance
      .get(url, {}, config)
      .then(async response => {
        console_log(
          `getOpportunityDetails response :`,
          JSON.stringify(response, null, 2),
        );
        let data = response.data.data;
        setOpportunityDetails(data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console_log(
          'getOpportunityDetails error: ',
          JSON.stringify(error, null, 2),
        );
        setIsLoading(false);
      });
  };
  const getAppliedList = async opportunity_id => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url =
      'pbv/v1/applied_opportunity_list?opportunity_id=' + opportunity_id;
    axiosInstance
      .get(url, {}, config)
      .then(async response => {
        console_log(
          `getAppliedList response:`,
          JSON.stringify(response, null, 2),
        );
        // let data = response.data.data;
        // setAppliedList(data);
        // setIsLoading(false);
      })
      .catch(function (error) {
        console_log('getAppliedList error: ', JSON.stringify(error, null, 2));
        // setIsLoading(false);
      });
  };
  const applyForOpportunity = async () => {
    dispatch(setLoader(true));
    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let rawData = new FormData();

    rawData.append('opportunity_id', item.opportunity_id);
    rawData.append('opportunity_author', item.opportunity_author);
    rawData.append('opportunity_name', item.opportunity_name);
    rawData.append('email', email);
    rawData.append('user_id', user_id);
    rawData.append('message', email);

    rawData.append('opportunity_file', {
      uri: cvSelected.uri,
      type: cvSelected.type,
      name: cvSelected.name,
    });
    let url = 'pbv/v1/apply_opportunity';
    axiosInstance
      .post(url, rawData, config)
      .then(async response => {
        console_log(
          `applyForOpportunity response :`,
          JSON.stringify(response, null, 2),
        );
        if (response.status === 200) {
          Alert.alert('Thank you, Your application has been received.');
        }
        dispatch(setLoader(false));
      })
      .catch(function (error) {
        console_log(
          'applyForOpportunity error: ',
          JSON.stringify(error, null, 2),
        );
        dispatch(setLoader(false));
      });
  };
  const removeOpportunityAlert = () => {
    Alert.alert(
      `Warning`,
      'Are you sure you want to remove',
      [
        {
          text: 'Cancel',
          onPress: () => {
            return true;
          },
        },
        {
          text: 'Yes',
          onPress: () => {
            removeOpportunityApi();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const validate = () => {
    if (email == '' || message == '') {
      Alert.alert(`Please enter required field`);
    } else if (!validateEmail()) {
      Alert.alert('Sorry, your email is invalid.');
    } else {
      setApplyModalOpen(false);
      setModalOpen(false);
      setEmail('');
      setMessage('');
      setTimeout(() => {
        applyForOpportunity();
      }, 500);
    }
  };

  const validateEmail = () => {
    return EMAIL_PATTERN.test(email);
  };
  const removeOpportunityApi = async () => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
      },
    };
    let url1 =
      'pbv/v1/remove_opportunity?opportunity_id=' + item.opportunity_id;
    let url2 =
      'pbv/v1/remove_saved_opportunity?opportunity_id=' +
      item.opportunity_id +
      '&user_id' +
      user_id;
    axiosInstance
      .post(currentTab == 2 ? url1 : url2, {}, config)
      .then(async response => {
        console_log(
          `removeOpportunityApi response :`,
          JSON.stringify(response, null, 2),
        );
        let data = response.data.data;
      })
      .catch(function (error) {
        console_log(
          'removeOpportunityApi error: ',
          JSON.stringify(error, null, 2),
        );
      });
  };
  const MainView = () => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.light_primary_color,
          borderRadius: 15,
          padding: 10,
          marginBottom: 10,
        }}
        activeOpacity={0.8}
        onPress={() => {
          // navigation.navigate(NAVIGATION.PROFILE);
        }}>
        {/* <Image
        source={{uri: item.profile_image}}
        resizeMode="cover"
        style={{height: 50, width: 50, borderRadius: 15}}
      /> */}
        <View
          style={{
            paddingHorizontal: 10,
            flex: 1,
          }}>
          {currentTab == 2 || currentTab == 4 ? (
            <Text
              style={{
                fontSize: 14,
                color: Colors.black,
                marginBottom: 5,
                fontFamily: Fonts.Regular_font,
                fontWeight: '500',
              }}>
              {item.author_name}
            </Text>
          ) : null}
          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              marginBottom: 5,
              fontFamily: Fonts.Regular_font,
              fontWeight: '400',
            }}>
            {currentTab == 0 ? item.title : item.opportunity_name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: Colors.black,
              fontFamily: Fonts.Regular_font,
              fontWeight: '300',
            }}>
            {item.content}
            {currentTab == 0 ? item.content : item.description}
          </Text>
          <Text style={text_style}>
            Expire Date:
            <Text
              style={{
                color: Colors.primary_color,
              }}>
              {' '}
              {item.expire_date}
            </Text>
          </Text>
          <Text style={text_style}>
            Jurisdiction:
            <Text
              style={{
                color: Colors.primary_color,
              }}>
              {' '}
              {typeof item.jurisdiction == 'object'
                ? item.jurisdiction.toString()
                : item.jurisdiction}
            </Text>
          </Text>
          <Text style={text_style}>
            Town:
            <Text
              style={{
                color: Colors.primary_color,
              }}>
              {' '}
              {typeof item.town == 'object' ? item.town.toString() : item.town}
            </Text>
          </Text>
          {[2, 3, 4].includes(currentTab) && !modalOpen ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setModalOpen(true);
                getOpportunityDetails();
              }}
              style={Styles.view_detail}>
              <SaveSymbol fill={Colors.primary_color} />
              <Text
                style={[
                  Styles.text_detail,
                  {
                    color: Colors.primary_color,
                  },
                ]}>
                View More
              </Text>
            </TouchableOpacity>
          ) : null}
          {[3, 4].includes(currentTab) ? (
            <View style={Styles.view_detail}>
              <SaveSymbol fill={Colors.primary_color} />
              <Text
                style={[
                  Styles.text_detail,
                  {
                    color: Colors.black,
                  },
                ]}>
                Applied
              </Text>
            </View>
          ) : null}
          {[3, 4].includes(currentTab) ? (
            <View style={Styles.view_detail}>
              <SaveSymbol fill={Colors.primary_color} />
              <Text
                style={[
                  Styles.text_detail,
                  {
                    color: Colors.black,
                  },
                ]}>
                Saved
              </Text>
            </View>
          ) : null}
          {[2, 3, 4].includes(currentTab) ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                removeOpportunityAlert();
              }}
              style={Styles.view_detail}>
              <SaveSymbol fill={Colors.red} />
              <Text
                style={[
                  Styles.text_detail,
                  {
                    color: Colors.red,
                  },
                ]}>
                Remove
              </Text>
            </TouchableOpacity>
          ) : null}
          {[2].includes(currentTab) ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={Styles.view_detail}
              onPress={() => {
                // getAppliedList(item.opportunity_id);
              }}>
              <SaveSymbol fill={Colors.primary_color} />
              <Text
                style={[
                  Styles.text_detail,
                  {
                    color: Colors.black,
                  },
                ]}>
                View Applied List
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <MainView />
      <Modal animationType="slide" transparent={true} visible={modalOpen}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.black_opacity_25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
            }}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end', marginBottom: 15}}
              activeOpacity={0.8}
              onPress={() => {
                setModalOpen(false);
              }}>
              <CloseSymbol height={20} width={20} />
            </TouchableOpacity>
            <MainView />
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginTop: 25,
                backgroundColor: Colors.primary_color,
                paddingHorizontal: 20,
                borderRadius: 5,
                paddingVertical: 5,
              }}
              activeOpacity={0.8}
              onPress={() => {
                setModalOpen(false);
                setTimeout(() => {
                  setApplyModalOpen(true);
                }, 200);
              }}>
              <Text
                style={[
                  {
                    color: Colors.white,
                    fontSize: 12,
                  },
                ]}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={applyModalOpen}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.black_opacity_25,
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: Colors.white,
              // alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
            }}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end', marginBottom: 15}}
              activeOpacity={0.8}
              onPress={() => {
                setModalOpen(false);
                setApplyModalOpen(false);
                setEmail('');
                setMessage('');
              }}>
              <CloseSymbol height={20} width={20} />
            </TouchableOpacity>
            <Text style={Styles.text_search_member}>
              {item.opportunity_name}
            </Text>
            <View>
              <Text style={Styles.title_text}>Email address*</Text>
              <TextInput
                value={email}
                onChangeText={text => {
                  setEmail(text);
                }}
                placeholder="Email address*"
                placeholderTextColor={Colors.border_color}
                style={Styles.TextInput_search_member}
              />
              <Text style={Styles.title_text}>Message*</Text>
              <TextInput
                value={message}
                onChangeText={text => {
                  setMessage(text);
                }}
                placeholder="Message*"
                placeholderTextColor={Colors.border_color}
                style={Styles.TextInput_search_member}
              />
              <Text style={Styles.title_text}>CV upload here</Text>
              <View
                style={{
                  backgroundColor: '#e3e3e3',
                  borderWidth: 1,
                  borderColor: '#d3d3d3',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
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
                    let response = await DocumentPicker.pick({
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
                  {cvSelected.name !== '' ? cvSelected.name : 'No file chooen'}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginTop: 25,
                backgroundColor: Colors.primary_color,
                paddingHorizontal: 20,
                borderRadius: 5,
                paddingVertical: 5,
              }}
              activeOpacity={0.8}
              onPress={() => {
                validate();
              }}>
              <Text
                style={[
                  {
                    color: Colors.white,
                    fontSize: 12,
                  },
                ]}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};
export default OpportunityView;

const Styles = StyleSheet.create({
  view_detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  text_detail: {
    marginLeft: 5,
    fontSize: 12,
  },
  text_search_member: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 5,
    marginTop: 10,
    fontFamily: Fonts.Regular_font,
    color: Colors.black,
  },
  TextInput_search_member: {
    borderWidth: 1,
    borderColor: Colors.border_color,
    borderRadius: 10,
    marginVertical: 5,
    // marginHorizontal: 20,
    padding: 7,
    color: Colors.black,
  },
  title_text: {
    color: Colors.black,
    fontSize: 14,
    marginTop: 15,
    fontWeight: '600',
    fontFamily: Fonts.Regular_font,
  },
});
