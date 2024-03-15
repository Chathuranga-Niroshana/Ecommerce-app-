import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function CartItem(props) {
  const { id, image, name, category, price } = props.data;
  const {cartItems ,addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
    <div className="CartItem">
      <img src={image} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={()=>removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
          <button onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
