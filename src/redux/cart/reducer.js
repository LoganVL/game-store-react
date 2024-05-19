import { createSlice } from "@reduxjs/toolkit";

const cartSilce = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (game) => game.id !== action.payload
      );
    },
  },
});

export const { setItemInCart, deleteItemFromCart } = cartSilce.actions;
export default cartSilce.reducer;
