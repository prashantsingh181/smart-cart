import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: { isVisible: false , message: "", isError: true },
  reducers: {
    showSuccessPopup(state, action) {
      state.isVisible = true;
      state.message = action.payload;
      state.isError = false;
    },
    showErrorPopup(state, action) {
      state.isVisible = true;
      state.message = action.payload;
      state.isError = true;
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
