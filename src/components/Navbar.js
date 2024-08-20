import React, { useContext } from "react";
import logo from "../assests/cryptoplace_assets/assets/logo.png";
import arrowicon from "../assests/cryptoplace_assets/assets/arrow_icon.png";
import { Link } from "react-router-dom";
import { CoinContext } from "../assests/cryptoplace_assets/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const handleDropdown = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
      }
    }
  };
  return (
    <div className="navbar">
      <img src={logo} alt="cryptoLogo" className="cryptoLogo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={handleDropdown}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button className="btn-signup">
          sign up
          <img src={arrowicon} className="arrowimg" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
