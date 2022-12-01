import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { PokemonsContextProvider } from "./contexts/Pokemon";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PokemonsContextProvider>
      <App />
    </PokemonsContextProvider>
  </React.StrictMode>
);
