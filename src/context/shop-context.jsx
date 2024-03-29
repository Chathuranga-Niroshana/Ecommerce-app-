import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products.js';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let i=1; i< PRODUCTS.length + 1; i++){
        cart[i]=0;
    }
    return cart;
}

function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart=(itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
    };
    const removeFromCart=(itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}));
    };
    const updateCartItemCount = (newAmount, itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: newAmount}));
    };
    
    const getTotal =()=>{
        let total = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = PRODUCTS.find((product)=>product.id === Number(item));
                total += cartItems[item] * itemInfo.price;
            }
        }
        return total;
    }

    const contextValue = {cartItems, addToCart, removeFromCart , updateCartItemCount, getTotal};

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider