import { ADD_CART } from "./constraints";

export function addCart(text) {
  return {
    type: ADD_CART,
    payload: text
  };
}
