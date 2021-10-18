import { productActions } from "../Types/Types";

export const setProducts = (products) => {
  return {
    type: productActions.SET_PRODUCTS,
    payload: products,
  };
};
export const selectProducts = (product) => {
  return {
    type: productActions.SELECT_PRODUCTS,
    payload: product,
  };
};
export const removeProducts = (product) => {
  return {
    type: productActions.REMOVE_SELECTED_PRODUCTS,
  };
};
