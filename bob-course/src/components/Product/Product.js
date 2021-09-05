import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import products from "./ProductDetails";
import { useStateProvider } from "../Context/StateProvider";

const Product = () => {
  const [state, dispatch] = useStateProvider();

  const handleClick = (id, name, price, image, description) => {
    dispatch({
      type: "PRODUCT",
      items: {
        id: id,
        name: name,
        price: price,
        image: image,
        description: description,
      },
    });
  };

  return (
    <div className="product">
      <Link to="/" className="product__home">
        <button className="btn btn-primary">Back to Home</button>
      </Link>
      <h1 className="product__trending">TRENDING</h1>

      {products.map((data) => {
        const { name, image, description, price, id, category_name } = data;
        return (
          <Link
            to="/details"
            onClick={() => handleClick(id, name, price, image, description)}
            key={id}
            className="productDetails__link"
          >
            <div className="productDetails">
              <img src={image} className="productDetails__img" />
              <div className="productDetails__description">
                <h1>{name || category_name}</h1>
                <div>
                  <h5>Description : </h5>
                  {description ||
                    "A special Mixed fruit Mojito from Coffee Republic. This is going to be your favorite."}
                </div>
                <h3>Price : {price}$</h3>
                {/* <button>Add</button> */}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Product;
