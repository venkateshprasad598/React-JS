import React from "react";
import { Link } from "react-router-dom";
import "./order.css";

function Order() {
  return (
    <div className="order">
      <Link to="/">Home</Link>
      <h1>Orders</h1>
    </div>
  );
}

export default Order;
