import { ADD_CART } from "./constraints";

const initalState = {
  cartState: []
};

export const setCart = (state = initalState, action = {}) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, cartState: [...state.cartState, action.payload] };
    default:
      return state;
  }
};
