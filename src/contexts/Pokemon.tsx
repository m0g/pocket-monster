import { useState, createContext } from "react";

export const PokemonsContext = createContext({});

export const PokemonsContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const pokemonsContext = {
    pokemons,
    setPokemons,
    allPokemons,
    setAllPokemons,
    isLoading,
    setIsLoading,
  };

  return (
    <PokemonsContext.Provider value={pokemonsContext}>
      {children}
    </PokemonsContext.Provider>
  );
};
