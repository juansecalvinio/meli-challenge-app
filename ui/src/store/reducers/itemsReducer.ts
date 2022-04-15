import {
  FETCH_ITEMS,
  FETCH_ITEM_BY_ID,
  FETCH_CATEGORIES,
} from '../actions';

const initialState = {
  categories: [],
  items: [],
  item: {},
}

const itemsReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload };
    case FETCH_ITEM_BY_ID:
      return { ...state, item: action.payload };
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

export default itemsReducer;