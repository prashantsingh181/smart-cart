import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categories";
import productsReducer from "./slices/products";
import wishlistReducer from "./slices/wishlist";
import cartReducer from "./slices/cart";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export default store;
