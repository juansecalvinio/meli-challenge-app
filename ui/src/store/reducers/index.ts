/**
 * Exporta el reducer principal con todos los reducers combinados
 */
import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import itemsReducer from "./itemsReducer";

const reducers = combineReducers({
  main: mainReducer,
  items: itemsReducer
});

export default reducers;

