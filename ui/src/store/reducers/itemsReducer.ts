import {
  FETCH_ITEMS,
  FETCH_ITEM_BY_ID
} from '../actions';

const initialState = {
  items: [],
  item: {},
}

const itemsReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload };
    case FETCH_ITEM_BY_ID:
      return { ...state, item: action.payload };
    default:
      return state;
  }
}

export default itemsReducer;