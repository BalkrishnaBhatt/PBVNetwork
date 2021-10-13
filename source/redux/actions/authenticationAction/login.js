import * as actionTypes from '../../actionTypes';
// import axios from 'axios';
import axiosInstance from '../../../axios';
// import {displayErrorModalFewSecs} from '../../errorModal';
// import {premiumLoginSuccess} from '../premiumLogin/premiumLogin';

// export const loginSave = (email, password, navigation) => {
//   const data_to_pass = {
//     email: email,
//     password: password,
//   };
//   let url =
//     'jwt-auth/v1/token' + '?username=' + email + '&password=' + password;
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return async dispatch => {
//     console.log('email: ', email);
//     axiosInstance
//       .post(url, config)
//       .then(function (response) {
//         console.log('response: ', JSON.stringify(response, null, 2));
//         // handle success

//         // dispatch(loginSuccess(email));

//         // if(response.data.toLowerCase().includes('success')){
//         //     dispatch(premiumRegisterSuccess(response.data))
//         //     dispatch(premiumLoginSuccess(email))
//         // }
//       })
//       .catch(function (error) {
//         // handle error
//         // if (error.response) {
//         //     console.log('Error in premium register', error.response.data)
//         //     dispatch(displayErrorModalFewSecs('Error while registering your account : ', error.response.data))
//         //     dispatch(premiumRegisterFailed(error.response.data))
//         // }
//         // else if (error.message) {
//         //     console.log(' error or message premiumRegister', error.message)
//         //     dispatch(displayErrorModalFewSecs('Error while registering your account : ', error.message))
//         //     dispatch(premiumRegisterFailed({
//         //         message: error.message
//         //     }))
//         // } else {
//         //     dispatch(displayErrorModalFewSecs('Error while registering your account '))
//         //     dispatch(premiumRegisterFailed({
//         //         message: "Error Regsitering premium"
//         //     }))
//         // }
//         console.log(JSON.stringify(error.response.data, null, 2));
//         // console.log('Error of config', error.config);
//       });
//   };
// };

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

// export const loginSuccess = emaii => {
//   return {
//     type: actionTypes.LOGIN,
//     emaii: emaii,
//   };
// };
export const loginSave = user_info => {
  return {
    type: actionTypes.LOGIN,
    user_info: user_info,
  };
};
