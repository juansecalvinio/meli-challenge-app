import {
  FETCH_ITEMS,
  FETCH_ITEM_BY_ID,
  SET_ITEM_SELECTED,
  SET_TEXT_SEARCHED
} from '../actions';

const initialState = {
  items: [],
  item: {},
  itemSelected: {},
  textSearched: ""
}

const itemsReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload };
    case FETCH_ITEM_BY_ID:
      return { ...state, item: action.payload };
    case SET_ITEM_SELECTED:
      return { ...state, itemSelected: action.payload };
    case SET_TEXT_SEARCHED:
      return { ...state, textSearched: action.payload };
    default:
      return state;
  }
}

export default itemsReducer;