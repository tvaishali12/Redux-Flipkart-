import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Renderproduct from "./component/Flikart Add to cart/Renderproduct";
import "./index.css";
import { Store } from "./component/Flikart Add to cart/store";
import Whishlist from "./component/Flikart Add to cart/Whishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Renderproduct />,
  },
  {
    path: "whishlist",
    element: <Whishlist />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router}>
      <Renderproduct />
    </RouterProvider>
  </Provider>
);
