import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PokemonsContextProvider } from "./contexts/Pokemon";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PokemonsContextProvider>
        <App />
      </PokemonsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
