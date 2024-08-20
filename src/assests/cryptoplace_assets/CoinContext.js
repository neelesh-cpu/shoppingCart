import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchCoins = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-TerdvRE3LY5tFAGikG46cCZ2",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setAllCoins(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const contextValve = {
    allCoins,
    currency,
    setAllCoins,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValve}>{children}</CoinContext.Provider>
  );
};

export default CoinContextProvider;
