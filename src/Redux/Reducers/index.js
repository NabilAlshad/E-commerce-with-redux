import { combineReducers } from "redux";
import {
  productReducers,
  selectedProductReducer,
} from "../Reducers/ProductReducers";

export const reducers = combineReducers({
  allProducts: productReducers,
  product: selectedProductReducer,
});
