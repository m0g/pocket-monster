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
  sortName: string | null;
  sortDirection: string;
  handleClickName: () => void;
  handleClickType: () => void;
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
  sortName: null,
  sortDirection: "",
  handleClickName: () => undefined,
  handleClickType: () => undefined,
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
  const [sortName, setSortName] = useState<SortName>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleClickName = () => {
    if (sortName === "name") {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortName("name");
      setSortDirection("asc");
    }
  };

  const handleClickType = () => {
    if (sortName === "type") {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortName("type");
      setSortDirection("asc");
    }
  };

  useEffect(() => {
    if (sortName === "name" && sortDirection === "asc") {
      // Sort does not create an array but mutate the old one.
      // We need to copy the array in order for react to detect the changes
      const pokemonsCopy = [...pokemons];

      setPokemons(
        pokemonsCopy.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
      );
    }

    if (sortName === "name" && sortDirection === "desc") {
      const pokemonsCopy = [...pokemons];

      setPokemons(
        pokemonsCopy.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        })
      );
    }
  }, [sortDirection, sortName, setPokemons, pokemons]);

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
  }, [selectedType]);

  useEffect(() => {
    setPokemons(allPokemons.filter(({ name }) => name.indexOf(query) !== -1));
  }, [query]);

  useEffect(() => {
    if (allPokemons.length > 0) {
      console.log("store in localstorage");
      localStorage.setItem("allPokemons", JSON.stringify(allPokemons));
    }
  }, [localStorage, allPokemons]);

  const reset = () => {
    setPokemons(allPokemons);
    setSelectedType("");
    setQuery("");
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
    sortName,
    sortDirection,
    handleClickName,
    handleClickType,
  };

  return (
    <PokemonsContext.Provider value={pokemonsContext}>
      {children}
    </PokemonsContext.Provider>
  );
};
