import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

import React from "react";
// racfe snippet

const Navbar = () => {
  // with useSelector we access the store
  // it takes a callback which is the the store.
  //   with this we can also access the slices  only not the entire store

  const amount = useSelector((store) => store.cart.amount);
  //   store is an object that contaions the slices
  // slices are objects that contain objects too.

  return (
    <div>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
