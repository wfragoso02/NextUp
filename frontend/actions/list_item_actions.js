import * as ListItemApiUtil from '../util/list_item_api_util';

export const REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM";
export const RECEIVE_LIST_ITEM = "RECEIVE_LIST_ITEM";

const receiveListItem = (listItem) => {
    return{
        type: RECEIVE_LIST_ITEM,
        listItem
    };
};
const removeListItem = (listItem) => {
    return{
        type: REMOVE_LIST_ITEM,
        listItem: listItem
    };
};

export const deleteListItem = (id) => dispatch => (
    ListItemApiUtil.deleteListItem(id).then((listItem) => dispatch(removeListItem(listItem)))
);

export const createListItem = (listItem) => dispatch => (
    ListItemApiUtil.createListItem(listItem).then(listItem => dispatch(receiveListItem(listItem)))
);