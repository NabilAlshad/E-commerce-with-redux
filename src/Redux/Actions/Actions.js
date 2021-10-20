import { productActions } from "../Types/Types";

export const setProducts = (products) => {
  return {
    type: productActions.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (product) => {
  return {
    type: productActions.SELECT_PRODUCTS,
    payload: product,
  };
};
