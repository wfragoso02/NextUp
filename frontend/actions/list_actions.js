import * as ListApiUtil from '../util/list_api_util';
import { RECEIVE_LIST } from './types';

const receiveList = (list) =>({
    type: RECEIVE_LIST,
    list
});

export const fetchList = (id) => dispatch => (
    ListApiUtil.fetchList(id).then(list => dispatch(receiveList(list)))
);