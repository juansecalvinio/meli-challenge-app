import { 
  FETCH_REQUESTED,
  FETCH_SUCCEDED,
  FETCH_FAILED
} from './mainActions';

import { ItemsService } from '../services';

export const FETCH_ITEMS = "FETCH_ITEMS";
export const FETCH_ITEM_BY_ID = "FETCH_ITEM_BY_ID";
export const SET_ITEM_SELECTED = "SET_ITEM_SELECTED";
export const SET_TEXT_SEARCHED = "SET_TEXT_SEARCHED";

interface ItemsAction {
  type: typeof FETCH_ITEMS |
  typeof FETCH_ITEM_BY_ID |
  typeof SET_ITEM_SELECTED |
  typeof SET_TEXT_SEARCHED;
  payload: any;
}

export function fetchItems(query: string) {
  return async function (dispatch: any) {
    try {
      dispatch({ type: FETCH_REQUESTED, payload: 'items' });
      const response = await ItemsService.instance.fetchItems(query);
      dispatch({ type: FETCH_ITEMS, payload: response.data.items });
      dispatch({ type: FETCH_SUCCEDED, payload: 'items' });
    } catch (error) {
      dispatch({ type: FETCH_FAILED, payload: { error, from: 'item' } });
    }
  }
}

export function fetchItemById(id: string) {
  return async function (dispatch: any) {
    try {
      dispatch({ type: FETCH_REQUESTED, payload: 'item' });
      const response = await ItemsService.instance.fetchItemById(id);
      dispatch({ type: FETCH_ITEM_BY_ID, payload: response.data.item });
      dispatch({ type: FETCH_SUCCEDED, payload: 'item' });
    } catch (error) {
      dispatch({ type: FETCH_FAILED, payload: { error, from: 'item' } });
    }
  }
}

export function setItemSelected(item: {}) {
  return function (dispatch: any) {
    try {
      dispatch({ type: SET_ITEM_SELECTED, payload: item });
    } catch (error) {
      dispatch({ type: FETCH_FAILED, payload: { error, from: 'setItemSelected' }});
    }
  }
}

export function setTextSearched(text: string) {
  return function (dispatch: any) {
    try {
      dispatch({ type: SET_TEXT_SEARCHED, payload: text });
    } catch (error) {
      dispatch({ type: FETCH_FAILED, payload: { error, from: 'setTextSearched' }});
    }
  }
}