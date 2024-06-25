import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categories";
import productsReducer from "./slices/products";
import wishlistReducer from "./slices/wishlist";
import cartReducer from "./slices/cart";
import popupReducer from "./slices/popup";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    popup: popupReducer,
  },
});

export default store;
