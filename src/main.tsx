import React from "react";
import ReactDOM from "react-dom/client";
import { PokemonsContextProvider } from "./contexts/Pokemon";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
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
