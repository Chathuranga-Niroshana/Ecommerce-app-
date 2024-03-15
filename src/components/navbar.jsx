import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { PRODUCTS } from "../products";
import Shop from "../pages/shop/shop";

export const Navbar = () => {
  // const [query, setQuery] = useState("");
  // const handleInputChange = (e) => {
  //   setQuery(e.target.value);
  // };
  // const filterItems = PRODUCTS.filter(
  //   (product) =>
  //     product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  // );
  // function FilteredData(PRODUCTS, query) {
  //   let FilteredProducts = PRODUCTS;

  //   if (query) {
  //     FilteredProducts = filterItems;
  //   }
  //   return FilteredProducts.map(
  //     ({ image, name, price, id, category }) => (
  //       <Shop
  //         id={id}
  //         image={image}
  //         name={name}
  //         price={price}
  //         category={category}
  //       />
  //     )
  //   );
  // }
  // const result = FilteredData(PRODUCTS, query);

  return (
    <div className="navbar">
      <div className="search">
        <input
          type="text"
          // onChange={(e)=>handleInputChange(e)}
          className="search-field"
          placeholder="search here..."
          // value={query}
        />
      </div>
      <div className="links">
        <Link to="/"> Shopping </Link>
        <Link to="/cart"> 🛒 </Link>
      </div>
      {/* <Shop products={result} /> */}
    </div>
  );
};
