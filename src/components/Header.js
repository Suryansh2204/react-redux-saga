import React from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartImg from "../images/icons8-shopping-cart-64.png";
const Header = () => {
  const cart = useSelector((state) => state.cartData);
  return (
    <div className="header">
      <Link to="/">
        <h1>React Reduct Saga</h1>
      </Link>
      <div>
        <Link to="/cart">
          <img src={cartImg} alt="" />
        </Link>
        <span>{cart.length}</span>
      </div>
    </div>
  );
};

export default Header;
