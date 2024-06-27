import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categories";
import productsReducer from "./slices/products";
import wishlistReducer from "./slices/wishlist";
import cartReducer from "./slices/cart";
import popupReducer from "./slices/popup";
import cartMiddleware from "./middleware/cartMiddleware";
import wishlistMiddleware from "./middleware/wishlistMiddleware";

// function to rehydrate the state
const reHydrateStore = (preloadedState) => {
  let cartData = [],
    wishlistData = [];
  if (localStorage.getItem("cart") !== null) {
    cartData = JSON.parse(localStorage.getItem("cart"));
  }
  if (localStorage.getItem("wishlist") !== null) {
    wishlistData = JSON.parse(localStorage.getItem("wishlist"));
  }
  return {
    ...preloadedState,
    cart: cartData,
    wishlist: wishlistData,
  };
};

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    popup: popupReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware, wishlistMiddleware),
});

export default store;
