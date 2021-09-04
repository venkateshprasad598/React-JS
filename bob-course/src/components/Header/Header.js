import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__name">DAILY FRESH</h1>
      <form className="header__form">
        <input type="text" className="form-control header__input" />
        <button className="btn btn-danger header__search">search</button>
      </form>
    </div>
  );
};

export default Header;
