/**
 * Reducer genérico para guardar los estados globales
 */
import { MainStore } from "../../common/interfaces";
import {
  MainActions,
  FETCH_FAILED,
  FETCH_REQUESTED,
  FETCH_SUCCEDED
} from '../actions';

const initialState: MainStore = {
  isError: false,
  error: {
    error: '',
    from: '',
  },
  fetching: {
    status: false,
    from: ''
  },
  ready: false,
};

const mainReducer = (state = initialState, action: MainActions): MainStore => {
  switch(action.type) {
    // Para despachar al momento de iniciar una petición al servidor
    case FETCH_REQUESTED:
      return { ...state, fetching: { status: true, from: action.payload }, isError: false };
    // Para despachar en el momento que la respuesta fue exitosa.
    case FETCH_SUCCEDED:
      return { ...state, fetching: { status: false, from: action.payload }, isError: false };
    // Para despachar en el momento que la respuesta haya tenido un error.
    case FETCH_FAILED:
      return { ...state, fetching: { status: false, from: action.payload.from }, isError: true, error: action.payload };
    // Por defecto devuelve el estado sin cambios
    default:
      return state;
  }
}

export default mainReducer;