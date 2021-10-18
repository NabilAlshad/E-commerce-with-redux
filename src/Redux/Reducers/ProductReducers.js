import { productActions } from "../Types/Types";

const initialState = {
  products: [],
};

const productReducers = (state = initialState, { type, payload }) => {
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

export default productReducers;
