import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categories";
import productsReducer from "./slices/products";
import wishlistReducer from "./slices/wishlist";
import cartReducer from "./slices/cart";
import popupReducer from "./slices/popup";
import themeReducer from "./slices/theme";
import cartMiddleware from "./middleware/cartMiddleware";
import wishlistMiddleware from "./middleware/wishlistMiddleware";
import themeMiddleware from "./middleware/themeMiddleware";

// function to rehydrate the state
const reHydrateStore = (preloadedState) => {
  let cartData = [],
    wishlistData = [],
    themeData = "light";
  if (localStorage.getItem("cart") !== null) {
    cartData = JSON.parse(localStorage.getItem("cart"));
  }
  if (localStorage.getItem("wishlist") !== null) {
    wishlistData = JSON.parse(localStorage.getItem("wishlist"));
  }
  if (localStorage.getItem("theme") !== null) {
    themeData = localStorage.getItem("theme");
  } else {
    themeData = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return {
    ...preloadedState,
    cart: cartData,
    wishlist: wishlistData,
    theme: themeData,
  };
};

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    popup: popupReducer,
    theme: themeReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cartMiddleware,
      wishlistMiddleware,
      themeMiddleware
    ),
});

export default store;
