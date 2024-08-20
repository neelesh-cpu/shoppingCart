import { RouterProvider } from "react-router-dom";
import "./App.css";

import { createBrowserRouter } from "react-router-dom";

import Home from "../src/pages/Home";
import AppLayout from "./components/AppLayout";

import Coins from "./pages/Coins";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/coins/:coinid",
        element: <Coins />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
