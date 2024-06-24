import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    wishlistToggle(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        return state.filter((item) => item.id === action.payload.id);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export default wishlistSlice.reducer;
export const { wishlistToggle } = wishlistSlice.actions;

// selectors
export const wishlistSelector = (state) => state.wishlist;
export const wishlistByIdSelector = (state, id) =>
  state.wishlist.find((item) => item.id === id);
