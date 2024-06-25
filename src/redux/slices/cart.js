import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      const { product, quantity } = action.payload;
      const item = state.find((item) => item.id === product.id);
      if (item) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : { ...item, quantity }
        );
      } else {
        state.push({ ...product, quantity });
      }
    },
    removeItemFromCart(state, action) {
      const productId = action.payload;
      return state.filter((item) => item.id !== productId);
    },
    incrementQuantity(state, action) {
      const productId = action.payload;
      return state.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decrementQuantity(state, action) {
      const productId = action.payload;
      return state.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    },
    clearCart() {
      return [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

// selectors
export const cartSelector = (state) => state.cart;
