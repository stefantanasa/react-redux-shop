import React from "react";
import CartItem from "./CartItem";
// along useSelector we import useDispatch hook to to dispath the actions
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../features/cart/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  //   here we will do the logic to display or not the
  // content of the cart if the amount of items are above 0
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  // if the amount is above 0 then the next snippet it will be displayed

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {/* now we will map through the  cartItems */}
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total: <span>${total.toFixed(2)}</span>
            </h4>
            <button
              className="btn clear-btn"
              //   Now we will use the clearCart action in onClick event
              // we also can write useDispatch(clearCart) too and we need
              // to import the action clearCart

              // now we replaced the clearCart() with openModal() because we want to
              // clear the cart when we press on the confirm btn in the modal
              onClick={() => dispatch(openModal())}
            >
              clear cart
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CartContainer;
