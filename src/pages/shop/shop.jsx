import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import './shop.css'

 function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>CNJ Online Shopping</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product)=>
                <Product key={product.id} data={product}/>
            )}
        </div>
    </div>
  )
}
export default Shop