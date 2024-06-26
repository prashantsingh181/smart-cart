import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fakeStoreApi from "../../axios/fakeStoreApi";

// product slice
const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (_, action) => action.payload);
  },
});
export default productSlice.reducer;

// async actions
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fakeStoreApi.get("/products");
    if (response && response.data && Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error("Unexpected Response Format!");
    }
  }
);

// selectors
export const productsSelector = (state) => state.products;
export const productByIdSelector = (state, id) =>
  state.products.find((product) => product.id === id);
export const productsByCategorySelector = (state, category) =>
  state.products.filter((product) => product.category === category);
