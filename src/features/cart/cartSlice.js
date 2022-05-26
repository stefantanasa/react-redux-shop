// import createSlice to be able to create a slice.
// A slice is a portion of the entire state
import { createSlice } from "@reduxjs/toolkit";

// we define the initial state the slice it will have
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

// declare the slice and inside create slice we'll have an object
const cartSlice = createSlice({
  //   "cart" is the name of the reducer.
  //   it must be matched into the store
  name: "cart",
  //   initial state is the one declared above
  initialState,
});

// console.log(cartSlice);

// we'll export the cart reducer like that. .reducer is a property
export default cartSlice.reducer;
