import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import { useStateProvider } from "../Context/StateProvider";

const Details = () => {
  const [state, dispatch] = useStateProvider();
  console.log(state);

  console.log("Hello");
  return (
    <div className="details">
      <Link to="/products" className="details__backButton">
        <button className="btn btn-primary">Back to Products</button>
      </Link>
      {state.myProduct.map((data) => {
        return (
          <div key={data.id} className="details__all">
            <div className="details__img">
              <img src={data.image} className="details__img" />
            </div>
            <div className="details__description">
              <h1 className="details__name">{data.name}</h1>
              <div> Description : {data.description}</div>
              <h5 className="details__price">{data.price}$</h5>
              <button className="btn btn-danger details__button">
                Proceed to Order
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Details;
