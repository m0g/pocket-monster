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
  const [selectedType, setSelectedType] = useState("");
  const [query, setQuery] = useState("");

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
