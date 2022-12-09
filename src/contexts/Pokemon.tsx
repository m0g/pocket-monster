import { useState, createContext, useEffect, SetStateAction } from "react";

interface PokemonsContextInterface {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<SetStateAction<Pokemon[]>>;
  allPokemons: Pokemon[];
  setAllPokemons: React.Dispatch<SetStateAction<Pokemon[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
  selectedType: string;
  setSelectedType: React.Dispatch<SetStateAction<string>>;
  reset: () => void;
  query: string;
  setQuery: React.Dispatch<SetStateAction<string>>;
  toggleFavorite: (id: number, isFavorite: boolean) => void;
}

const defaultValues: PokemonsContextInterface = {
  pokemons: [],
  setPokemons: () => [],
  allPokemons: [],
  setAllPokemons: () => [],
  isLoading: true,
  setIsLoading: () => true,
  selectedType: "",
  setSelectedType: () => "",
  reset: () => undefined,
  query: "",
  setQuery: () => "",
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

    setAllPokemons((pokemons) => pokemons.map(toggleIterate)); // this line reset the order!
    setPokemons((pokemons) => pokemons.map(toggleIterate));
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
