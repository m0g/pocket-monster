import { useState, createContext, useEffect } from "react";

export const PokemonsContext = createContext({});

export const PokemonsContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  if (allPokemons.length > 0 && types.length === 0) {
    setTypes(() => {
      let allTypes = [];
      for (let pokemon of allPokemons) {
        for (let type of pokemon.types) {
          if (allTypes.indexOf(type.name) === -1) {
            allTypes.push(type.name);
          }
        }
      }
      return allTypes;
    });
  }

  useEffect(() => {
    setPokemons(() => {
      if (selectedType === "") {
        return allPokemons;
      }

      return allPokemons.filter(({ types }) => {
        let shouldInclude = false;

        for (let type of types) {
          if (type.name === selectedType) {
            shouldInclude = true;
          }
        }

        return shouldInclude;
      });
    });
  }, [selectedType]);

  const reset = () => {
    setPokemons(allPokemons);
    setSelectedType("");
  };

  const pokemonsContext = {
    pokemons,
    setPokemons,
    allPokemons,
    setAllPokemons,
    isLoading,
    setIsLoading,
    types,
    selectedType,
    setSelectedType,
    reset,
  };

  return (
    <PokemonsContext.Provider value={pokemonsContext}>
      {children}
    </PokemonsContext.Provider>
  );
};
