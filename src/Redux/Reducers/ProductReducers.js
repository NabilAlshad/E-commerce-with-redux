import { productActions } from "../Types/Types";

const initialState = {
  products: [],
};

export const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case productActions.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case productActions.SELECT_PRODUCTS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
// export default productReducers;
