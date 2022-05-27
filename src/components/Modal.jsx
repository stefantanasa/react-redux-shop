import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/cart/modalSlice";

const Modal = () => {
  let dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all the items from the cart?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            // when we click the btn we trigger 2 functions: clearCart and closeModal
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            className="btn clear-btn"
            // here we trigger the closeModal due we want to only close the modal
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
