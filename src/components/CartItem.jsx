import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

// we will destructure the props coming from CartContainer
// these props come from there through {item}
const CartItem = ({ img, price, id, title, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          //   whenever we click the up arrow we increase the amount of the item
          onClick={() => dispatch(increase({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            //   we put a logic so whenever the the amount is 1, we remove the item from the cart
            if (amount === 1) {
              dispatch(removeItem(id));
            }
            // because an object that has the key and the value the same
            // the {id:id} can be written {id}
            dispatch(decrease({ id: id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
