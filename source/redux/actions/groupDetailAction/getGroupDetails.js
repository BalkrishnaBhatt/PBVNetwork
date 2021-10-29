import {console_log} from '../../../utils/loggers';
import * as actionTypes from '../../actionTypes';

export const getGroupDetails = group_info => {
  // console_log('group details called', group_info);
  return {
    type: actionTypes.GET_GROUP_DETAILS,
    group_info: group_info,
  };
};
