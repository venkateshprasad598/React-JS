import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import products from "./ProductDetails";

const Product = () => {
  return (
    <div className="product">
      <Link to="/">Home</Link>
      <h1>Product</h1>

      {/* {products[0].id} */}
      {products.map((data) => {
        const { name, image, description, price } = data;
        return (
          <div className="productDetails">
            <img src={image} className="productDetails__img" />
            <div className="productDetails__description">
              <h1>{name}</h1>
              <p>
                <h5>Description : </h5>
                {description}
              </p>
              <h3>Price : {price}$</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
