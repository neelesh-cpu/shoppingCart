import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../assests/cryptoplace_assets/CoinContext";

const Coins = () => {
  const [indlCoin, setIndlCoin] = useState([]);
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);
  console.log(coinId);

  // const fetchIndividualcoin = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       "x-cg-demo-api-key": "CG-TerdvRE3LY5tFAGikG46cCZ2",
  //     },
  //   };

  //   fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setIndlCoin(response);
  //       console.log(indlCoin);
  //     })
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   fetchIndividualcoin();
  // }, [currency]);
  return (
    <div>
      <h1>Coins {coinId}</h1>
    </div>
  );
};

export default Coins;
