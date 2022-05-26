import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
//

// we will destructure the props coming from CartContainer
// these props come from there through {item}
const CartItem = ({ img, price, id, title, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt="" srcset="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
