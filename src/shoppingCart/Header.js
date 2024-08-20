import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <h2>ShoppingCart</h2>
      <form>
        <input type="text" placeholder="Search a Product" />
      </form>
      <div className="dropdowns">
        <FaShoppingCart />
        <select>
          <option value="fruit">11</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
