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
    return response.data;
  }
);

// selectors
export const categoriesSelector = (state) => state.categories;
