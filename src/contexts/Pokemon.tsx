import { useState, createContext } from "react";

export const PokemonsContext = createContext({});

export const PokemonsContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const pokemonsContext = { pokemons, setPokemons };

  return (
    <PokemonsContext.Provider value={pokemonsContext}>
      {children}
    </PokemonsContext.Provider>
  );
};
