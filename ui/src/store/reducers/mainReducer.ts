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
    case FETCH_REQUESTED:
      return { ...state, fetching: { status: true, from: action.payload }, isError: false };
    case FETCH_SUCCEDED:
      return { ...state, fetching: { status: false, from: action.payload }, isError: false };
    case FETCH_FAILED:
      return { ...state, fetching: { status: false, from: action.payload.from }, isError: true, error: action.payload };
    default:
      return state;
  }
}

export default mainReducer;