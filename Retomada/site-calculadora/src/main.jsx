import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App"
import Cadastro from "./components/cadastro";
import Home from "./components/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "cadastro",
    element: <Cadastro/>,
  },

  {
    path: "home",
    element: <Home/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);