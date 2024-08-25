import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    toggleTheme(state) {
      console.log(1);
      return state === "light" ? "dark" : "light";
    },
  },
});

export default themeSlice.reducer;

// actions
export const { toggleTheme } = themeSlice.actions;

// selectors
export const themeSelector = (state) => state.theme;
