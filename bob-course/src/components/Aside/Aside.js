import React from "react";
import "./Aside.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="aside">
      <div className="aside__names">
        <Link to="/products" className="aside__products">
          Products
        </Link>
        <Link to="/orders" className="aside__products">
          Orders
        </Link>
      </div>
    </div>
  );
};

export default Aside;
