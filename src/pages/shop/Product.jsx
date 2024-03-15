import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

function Product(props) {
    const {id, name, price, image, category}= props.data;

    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

  return (
    <div className='product'>
        <img src={image} />
        <div className="description">
            <p><b>{name}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBtn' onClick={()=>addToCart(id)}>Add To Cart</button>
    </div>
  )
}

export default Product