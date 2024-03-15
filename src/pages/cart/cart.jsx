import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotal } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="titleName">
        <h1>Cart</h1>
      </div>
      <div className="cart" key={Math.random()}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {getTotal > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${getTotal()}</p>
          <button onClick={() => navigate("/")}>Back To Shopping...</button>
          <button>Checkout</button>
        </div>
      ) : (
        <div className="checkout">
          <h1>Your Cart Is Empty...</h1>
          <button onClick={() => navigate("/")}>Back To Shopping...</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
