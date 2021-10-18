import { combineReducers } from "redux";
import productReducers from "../Reducers/ProductReducers";
const reducers = combineReducers({
  allProducts: productReducers,
});
export default reducers;
