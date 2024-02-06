import { createSlice } from "@reduxjs/toolkit";
import { addItemToShoppingCart } from "../../utils/function";
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      state.cartItems = addItemToShoppingCart(action.payload, state.cartItems);
    },
    removeFromCartAction: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCartAction, removeFromCartAction } = cartSlice.actions;
export const selectCartItems = ({ cart }) => cart.cartItems;
export default cartSlice.reducer;
