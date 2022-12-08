import { useState, createContext, useEffect } from "react";

interface PokemonsContextInterface {
  pokemons: Pokemon[];
  setPokemons: (pokemons: Pokemon[]) => void;
  allPokemons: Pokemon[];
  setAllPokemons: (allPokemons: Pokemon[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  types: Type[];
  selectedType: string;
  setSelectedType: (selectedType: string) => void;
  reset: () => void;
  query: string;
  setQuery: (query: string) => void;
  toggleFavorite: (id: number, isFavorite: boolean) => void;
}

const defaultValues: PokemonsContextInterface = {
  pokemons: [],
  setPokemons: () => undefined,
  allPokemons: [],
  setAllPokemons: () => undefined,
  isLoading: true,
  setIsLoading: () => undefined,
  types: [],
  selectedType: "",
  setSelectedType: () => undefined,
  reset: () => undefined,
  query: "",
  setQuery: () => undefined,
  toggleFavorite: () => undefined,
};
export const PokemonsContext =
  createContext<PokemonsContextInterface>(defaultValues);

export const PokemonsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [types, setTypes] = useState<Type[]>([]);
  const [selectedType, setSelectedType] = useState("");
  const [query, setQuery] = useState("");

  if (allPokemons.length > 0 && types.length === 0) {
    setTypes(() => {
      const allTypes = [];
      for (const pokemon of allPokemons) {
        for (const type of pokemon.types) {
          if (allTypes.indexOf(type.name) === -1) {
            allTypes.push(type.name);
          }
        }
      }
      return allTypes;
    });
  }

  useEffect(() => {
    console.log("selected type");
    setPokemons(() => {
      if (selectedType === "") {
        return allPokemons;
      }

      return allPokemons.filter(({ types }) => {
        let shouldInclude = false;

        for (const type of types) {
          if (type.name === selectedType) {
            shouldInclude = true;
          }
        }

        return shouldInclude;
      });
    });
  }, [selectedType, allPokemons]);

  useEffect(() => {
    console.log("query set pokemon");
    setPokemons(allPokemons.filter(({ name }) => name.indexOf(query) !== -1));
  }, [query, allPokemons]);

  useEffect(() => {
    if (allPokemons.length > 0) {
      console.log("store in localstorage");
      localStorage.setItem("allPokemons", JSON.stringify(allPokemons));
    }
  }, [allPokemons]);

  const reset = () => {
    setPokemons(allPokemons);
    setSelectedType("");
    setQuery("");
  };

  const toggleFavorite = (id: number, isFavorite: boolean) => {
    const toggleIterate = (pokemon: Pokemon) => {
      if (pokemon.id == id) {
        pokemon.isFavorite = isFavorite;
      }

      return pokemon;
    };

    setPokemons((pokemons) => pokemons.map(toggleIterate));
    setAllPokemons((pokemons) => pokemons.map(toggleIterate));
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
    query,
    setQuery,
    toggleFavorite,
  };

  return (
    <PokemonsContext.Provider value={pokemonsContext}>
      {children}
    </PokemonsContext.Provider>
  );
};
