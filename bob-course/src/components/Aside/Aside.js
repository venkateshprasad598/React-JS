import React from "react";
import "./Aside.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="aside">
      <div className="aside__names">
        <Link to="/products" className="aside__products">
          <button className="btn btn-primary asideName__products">
            Products
          </button>
        </Link>

        <Link to="/products" className="aside__products">
          <button className="btn btn-primary asideName__products">
            Orders
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Aside;
