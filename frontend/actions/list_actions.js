import * as ListApiUtil from '../util/list_api_util';

export const RECEIVE_LIST = "RECEIVE_LIST";

const receiveList = (list) =>{
    return{
        type: RECEIVE_LIST,
        list
    };
};

export const fetchList = (id) => dispatch => (
    ListApiUtil.fetchList(id).then(list => dispatch(receiveList(list)))
);