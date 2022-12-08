import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { PokemonsContextProvider } from "./contexts/Pokemon";
import Root from "./routes/root";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AppRoutes from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PokemonsContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </PokemonsContextProvider>
  </React.StrictMode>
);
