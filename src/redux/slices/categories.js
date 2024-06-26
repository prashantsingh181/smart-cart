import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fakeStoreApi from "../../axios/fakeStoreApi";

// categories slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (_, action) => action.payload);
  },
});
export default categoriesSlice.reducer;

// async actions
export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await fakeStoreApi.get("/products/categories");
    if (response && response.data && Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error("Unexpected Response Format!");
    }
  }
);

// selectors
export const categoriesSelector = (state) => state.categories;
