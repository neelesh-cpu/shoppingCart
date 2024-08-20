import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../assests/cryptoplace_assets/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState("");
  const [displaycoins, setDisplayCoins] = useState([]);
  const { allCoins, currency, setAllCoins } = useContext(CoinContext);
  console.log(allCoins);

  useEffect(() => {
    setDisplayCoins(allCoins);
  }, [allCoins]);

  const inputSearch = async (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setDisplayCoins(displaycoins);
    }
    const coins = await allCoins.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });

    setAllCoins(coins);
    setInput("");
  };

  return (
    <div className="hero">
      <div className="home">
        <h1 className="cryptoheader">
          Largest <br />
          Cryto Marketplace
        </h1>

        <p className="hero-para">
          Welcome to the world's largest cryptocurrency marketplace.
          <br />
          sign up to explore more about crypto
        </p>
        <form className="forms" onSubmit={handleSearch}>
          <input
            type="text"
            className="inputbox"
            placeholder="Search cryptoCurrency..."
            value={input}
            onChange={inputSearch}
          />
          <button className="btn-search">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24HChange</p>
          <p style={{ textAlign: "right" }} className="market-cap">
            Market Cap
          </p>
        </div>
        {allCoins?.slice(0, 10).map((coins, index) => (
          <div className="table-layout" key={coins.id}>
            <p>{index + 1}</p>
            <div className="coins">
              <img src={coins.image} className="coin-img" />
              <Link
                style={{ textDecoration: "none" }}
                to={`/coins/${coins.id}`}
              >
                <p>{coins.name + "-" + coins.symbol}</p>
              </Link>
            </div>
            <p>
              {currency.symbol}
              {coins.current_price.toLocaleString()}
            </p>
            <p
              className={
                coins.price_change_percentage_24h > 0 ? "green" : "red"
              }
            >
              {Math.floor(coins.price_change_percentage_24h * 100) / 100}
            </p>
            <p style={{ textAlign: "right" }} className="market-cap">
              {coins.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
