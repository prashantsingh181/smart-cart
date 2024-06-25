import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: { isVisible: true, message: "Hello!", isError: false },
  reducers: {
    showSuccessPopup(state, action) {
      state.isVisible = true;
      state.message = action.payload;
      state.isError = false;
      setTimeout(() => {
        state.isVisible = false;
        state.message = "";
      }, 3000);
    },
    showErrorPopup(state, action) {
      state.isVisible = true;
      state.message = action.payload;
      state.isError = true;
      setTimeout(() => {
        state.isVisible = false;
        state.message = "";
      }, 3000);
    },
    hidePopup(state) {
      state.isVisible = false;
      state.message = "";
    },
  },
});

export default popupSlice.reducer;

export const { showSuccessPopup, showErrorPopup, hidePopup } =
  popupSlice.actions;

// selectors
export const popupSelector = (state) => state.popup;
