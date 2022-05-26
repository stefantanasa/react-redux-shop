// import createSlice to be able to create a slice.
// A slice is a portion of the entire state
import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
// we define the initial state the slice it will have
const initialState = {
  // import the data here from cartItems. this is a
  // this is a .js file where an array is exported so the cart Items is an array
  cartItems: cartItems,
  amount: 1,
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
  reducers: {
    clearCart: (state) => {
      // we are able to mutate the state just
      //  because we have installed the Immer library, IT COMES WITH REDUCT TOOLKIT
      // otherways we would have to write:
      // state.cartItems = {{...state, cartItems=[]}}
      state.cartItems = [];
    },
  },
});

// console.log(cartSlice);

// now we need to export the action/function from the reducers/action
// notice we have destructured the action from cartSlice.actions
export const { clearCart } = cartSlice.actions;

// we'll export the cart reducer like that. .reducer is a property
export default cartSlice.reducer;
