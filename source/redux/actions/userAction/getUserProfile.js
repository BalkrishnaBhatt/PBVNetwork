import * as actionTypes from '../../actionTypes';
import axiosInstance from '../../../axios';

import {Store} from '../../store';
import {console_log} from '../../../utils/loggers';
export const getUserProfile = navigation => {
  let url = 'buddypress/v1/members/';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };
  let user_id = Store.getState().AuthenticationReducer.userId;
  return async dispatch => {
    dispatch(set_loader(true));
    axiosInstance
      .get(url + user_id, config)
      .then(function (response) {
        let data = response.data.xprofile.groups[0].fields;
        // console.log('datagetUserProfile: ', data);
        let raw_data = {};
        // raw_data['avatar_urls'] = response.data.avatar_urls;
        data.map(element => {
          if (element.name == 'Name') {
            raw_data['name'] = element.value.raw;
          } else if (element.name == 'Firm Name') {
            raw_data['firmName'] = element.value.raw;
          } else if (element.name == 'Jurisdiction') {
            raw_data['jurisdiction'] = element.value.raw;
          } else if (element.name == 'Town') {
            raw_data['town'] = element.value.raw;
          } else if (element.name == 'Mobile Number') {
            raw_data['mobileNumber'] = element.value.raw;
          } else if (element.name == 'Phone Number') {
            raw_data['phoneNumber'] = element.value.raw;
          } else if (element.name == 'About Me') {
            raw_data['aboutMe'] = element.value.raw;
          } else if (element.name == 'Job Opportunities') {
            raw_data['jobOpportunities'] = element.value.raw;
          } else if (element.name == 'Business Opportunities') {
            raw_data['businessOpportunities'] = element.value.raw;
          }
        });
        console_log(
          'getUserProfile response: ',
          JSON.stringify(raw_data, null, 2),
        );

        // handle success
        dispatch(get_user_profile(raw_data));
      })
      .catch(function (error) {
        // handle error

        console_log(JSON.stringify(error.response, null, 2));
        let error_code = error.response.data.code;
        if (
          error_code == 'jwt_auth_invalid_token' ||
          error_code == 'rest_forbidden'
        ) {
          navigation.navigate(NAVIGATION.LOGIN);
        }
      });
  };
};

export const set_loader = loaderState => {
  return {
    type: actionTypes.SET_USER_LOADING,
    loaderState: loaderState,
  };
};
export const get_user_profile = list => {
  // console.log('get_user_profile: ', get_user_profile);
  return {
    type: actionTypes.GET_USER_PROFILE,
    list,
  };
};
