import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./todoList/TodoList";

import "./index.css";
import ShoppingCart from "./shoppingCart/ShoppingCart";
// import App from "./App";
// import CoinContextProvider from "./assests/cryptoplace_assets/CoinContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <TodoList /> */}
    {/* <CoinContextProvider>
      <App />
    </CoinContextProvider> */}
    <ShoppingCart />
  </React.StrictMode>
);
