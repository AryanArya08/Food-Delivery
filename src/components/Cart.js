import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  //   const store = useSelector((store) => store);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart(cartItems));
  };
  //   console.log(cartItems);
  return (
    <div className="flex flex-wrap justify-center flex-col items-center">
      <div className="flex justify-center m-2">
        <h1 className="font-bold text-2xl m-2">
          Cart Items-{cartItems.length}
        </h1>
        <button
          className="mt-2 orderBtn bg-green-600 text-white font-semibold p-2 rounded-lg hover:bg-green-800"
          onClick={() => handleClearCart()}
        >
          {" "}
          Clear Cart
        </button>
      </div>
      <div>
        {cartItems.length === 0 ? (
          <h1 className="text-2xl font-mono font-semibold">Cart is Empty</h1>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartCard {...item} />
            ))}
          </>
        )}
      </div>
      {/*   {cartItems.length === 0
      }?<h1>Cart is Empty</h1>:
      {cartItems.map((item) => (
        <MenuCard {...item} />
      ))} */}
    </div>
  );
};

export default Cart;
