// import createSlice to be able to create a slice.
// A slice is a portion of the entire state
import { createSlice } from "@reduxjs/toolkit";
// we impport createAsyncThunk so we can perform async functions
// createAsyncThunk comes installed with reduxtoolkit.
import { createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
// we define the initial state the slice it will have
const initialState = {
  // import the data here from cartItems. this is a
  // import cartItems from './../../cartItems';
  // this is a .js file where an array is exported so the cart Items is an array
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};
// save the url to fetch in a constant
const url = "https://course-api.com/react-useReducer-cart-project";

// export the getCartItems
// getCartItems it will take to params: "type/action" and a callback to perform the fetch
export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
});
// after reducers we  need to add extraReducers

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
      // if we return { cartItems:[]}, this will become the new state
      // meaning that the rest of the properties will be deleted
    },
    removeItem: (state, action) => {
      // well filter by th id the cartItems so the item that we need to remove
      // it will be removed from the cartItems array
      state.cartItems = state.cartItems.filter(
        (item) => action.payload !== item.id
        // the action.payload will be the id that the removeItem action will
        // receive when the remove button will be clicked.
      );
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      console.log(cartItem);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      // because in the payload this time we receive an object ({id:id})
      // we treat payload as an object
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
        state.amount = amount;
        state.total = total;
      });
    },
  },
  // we add this extraReducers to perform the async fetch getCartItems
  // here we will handle the promise, rejected and fullfiled
  // extraReducers: {
  //   // is pending
  //   [getCartItems.pending]: (state) => {
  //     // we add in the state .isLoading and set it to true
  //     state.isLoading = true;
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     // we set isloading to false so when the promise is fullfiled isLoaded turns to false
  //     state.isLoading = false;
  //     // and we set the cartItems to action.payload
  //     state.cartItems = action.payload;
  //   },
  //   [getCartItems.rejected]: (state) => {
  //     // we set isloading to false so when the promise is rejected isLoaded turns to false
  //     state.isLoading = false;
  //   },
  // },
});

// console.log(cartSlice);

// now we need to export the action/function from the reducers/action
// notice we have destructured the action from cartSlice.actions
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;

// we'll export the cart reducer like that. .reducer is a property
export default cartSlice.reducer;
