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
    path: "cadastro",
    element: <Cadastro/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);