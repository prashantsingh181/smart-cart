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

// async actions
export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await fakeStoreApi.get("/products/categories");
    console.log(response);
    return response.data;
  }
);

export default categoriesSlice.reducer;
