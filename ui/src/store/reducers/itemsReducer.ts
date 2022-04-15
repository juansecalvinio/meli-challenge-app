/**
 * Reducer para guardar los estados relacionados a items
 */
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
    // Para despachar al momento de recibir los items exitosamente
    case FETCH_ITEMS:
      return { ...state, items: action.payload };
    // Para despachar al momento de recibir un items exitosamente
    case FETCH_ITEM_BY_ID:
      return { ...state, item: action.payload };
    // Para despachar al momento de recibir las categorías exitosamente
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    // Por defecto devuelve el estado sin cambios
    default:
      return state;
  }
}

export default itemsReducer;