import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';
// import {premiumLoginSuccess} from '../premiumLogin/premiumLogin';

import {Store} from '../../store';
import {useSelector, useDispatch} from 'react-redux';
export const getHomeActivities = navigation => {
  // let AuthenticationReducer = useSelector(state => state.AuthenticationReducer);
  let url = 'buddypress/v1/activity';
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Store.getState().AuthenticationReducer.token,
    },
  };

  return async dispatch => {
    dispatch(set_loader(true));
    axiosInstance
      .get(url + '?display_comments=stream', config)
      .then(function (response) {
        console.log(
          'getHomeActivities response: ',
          JSON.stringify(response.data, null, 2),
        );
        // handle success
        dispatch(get_home_activities(response.data));
        // navigation.navigate('login');
        // if(response.data.toLowerCase().includes('success')){
        //     dispatch(premiumRegisterSuccess(response.data))
        //     dispatch(premiumLoginSuccess(email))
        // }
      })
      .catch(function (error) {
        dispatch(set_loader(false));
        // handle error
        // if (error.response) {
        //     console.log('Error in premium register', error.response.data)
        //     dispatch(displayErrorModalFewSecs('Error while registering your account : ', error.response.data))
        //     dispatch(premiumRegisterFailed(error.response.data))
        // }
        console.log('getHomeActivities', JSON.stringify(error, null, 2));
        // console.log('Error of config', error.config);
      });
  };
};

// export const premiumRegisterStart = () => {
//   return {
//     type: actionTypes.REGISTER_START,
//   };
// };

// export const premiumRegisterSuccess = data => {
//   return {
//     type: actionTypes.REGISTER_SUCCESS,
//   };
// };

// export const premiumRegisterFailed = error => {
//   return {
//     type: actionTypes.GET_ALL_BUDGETS_FAILED,
//     error,
//   };
// };
// import * as actionTypes from '../../actionTypes';

export const set_loader = loaderState => {
  return {
    type: actionTypes.SET_HOME_LOADING,
    loaderState: loaderState,
  };
};
export const get_home_activities = list => {
  return {
    type: actionTypes.GET_HOME_ACTIVITIES,
    list,
  };
};
