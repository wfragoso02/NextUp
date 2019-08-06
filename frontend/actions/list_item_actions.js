import * as ListItemApiUtil from '../util/list_item_api_util';
import { REMOVE_LIST_ITEM, RECEIVE_LIST_ITEM } from './types';

const receiveListItem = (listItem) => ({
  type: RECEIVE_LIST_ITEM,
  listItem
});

const removeListItem = (listItem) => ({
  type: REMOVE_LIST_ITEM,
  listItem
});

export const deleteListItem = (data) => dispatch => (
  ListItemApiUtil.deleteListItem(data).then((listItem) => dispatch(removeListItem(listItem)))
);

export const createListItem = (listItem) => dispatch => (
  ListItemApiUtil.createListItem(listItem).then(listItem => dispatch(receiveListItem(listItem)))
);