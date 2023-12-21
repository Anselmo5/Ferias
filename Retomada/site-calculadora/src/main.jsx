import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App"
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";
import Repositorio from './components/Repositorio'
import Calculadora from './components/Calculadora'
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

  {
    path: "calculadora",
    element: <Calculadora/>,
  },

  {
    path: "repositorio",
    element: <Repositorio/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);