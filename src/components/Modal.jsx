import React from "react";

const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all the items from the cart?</h4>
        <div className="btn-container">
          <button className="btn confirm-btn">Confirm</button>
          <button className="btn clear-btn">Cancel</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
