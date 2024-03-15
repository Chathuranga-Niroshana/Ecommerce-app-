import React from 'react'
import { Navbar } from '../../components/navbar'
import Shop from './shop'

function SearchedProducts({filterItems}) {
  return (
    <div><div className="filtered-products">
    {filterItems.map(({ id, image, name, price, category }) => (
      <Shop key={id} id={id} image={image} name={name} price={price} category={category} />
    ))}
  </div></div>
  )
}

export default SearchedProducts