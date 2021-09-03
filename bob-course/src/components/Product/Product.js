import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import products from "./ProductDetails";
import { useState } from "react";
import Details from "../Details/Details";
import { myContext } from "../Context/StateProvider";

const Product = () => {
  const [myDetails, setMyDetails] = useState(true);

  const handleClick = (num) => {
    // console.log(num);
    // let index = products.findIndex((data) => data.id === num);
    // console.log(index);
    // let myProduct = [...products];
    // let myProductIndex = myProduct[index];
    // console.log(myProductIndex);
    // setMyDetails(myProductIndex);
    // console.log(myDetails);
  };

  return (
    <div className="product">
      <Link to="/">Home</Link>
      <h1>Product</h1>

      <Link to="/details">
        {products.map((data) => {
          const { name, image, description, price, id } = data;
          return (
            <div
              className="productDetails"
              key={id}
              onClick={() => handleClick(id)}
            >
              <img src={image} className="productDetails__img" />
              <div className="productDetails__description">
                <h1>{name}</h1>
                <div>
                  <h5>Description : </h5>
                  {description}
                </div>
                <h3>Price : {price}$</h3>
              </div>
            </div>
          );
        })}
      </Link>
    </div>
  );
  console.log(myDetails);
};

export default Product;
