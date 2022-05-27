import { createSlice } from "@reduxjs/toolkit";

// define the initial state object
const initialState = {
  isOpen: false,
};
// create a new slice with the createSlice function
// and sate the name of the slice, initial state and the reducers
// reducers will contain an object with actions
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

// here we export the actions from modalSlice.actions that comes from reducers
export const { openModal, closeModal } = modalSlice.actions;
// export the modalSlice so we can import it and use it in the store
export default modalSlice.reducer;
