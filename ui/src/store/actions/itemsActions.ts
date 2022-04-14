import { 
  FETCH_REQUESTED,
  FETCH_SUCCEDED,
  FETCH_FAILED
} from './mainActions';

import { ItemsService } from '../services';

export const FETCH_ITEMS = "FETCH_ITEMS";
export const FETCH_ITEM_BY_ID = "FETCH_ITEM_BY_ID";

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