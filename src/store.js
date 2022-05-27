import { configureStore } from "@reduxjs/toolkit";

// we import the cartSlice reducer exported from cartSlice as cartReducer
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/cart/modalSlice";

export const store = configureStore({
  reducer: {
    // "cart" must match the name of the reducer from the slice
    cart: cartReducer,
    // again the "modal" matches the name of the slice
    modal: modalReducer,
  },
});
