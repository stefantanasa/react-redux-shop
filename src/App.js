import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartSlice";

function App() {
  // use the useDispatch hook
  let dispatch = useDispatch();
  // destructure the cartItems from the cart slice. remember that "cart" is the name of the slice
  let { cartItems } = useSelector((state) => state.cart);

  // we use the useEffect to calculate again whenever the cartItems is modified.
  // every time cartItems have a change in it the calculateTotal action is triggered.
  useEffect(() => {
    dispatch(calculateTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
