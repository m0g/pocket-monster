import { useContext, useState, useEffect } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function useSortPokemons() {
  const [sortName, setSortName] = useState<SortName>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const { pokemons, setPokemons } = useContext(PokemonsContext);

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

    if (sortName === "type" && sortDirection === "asc") {
      const pokemonsCopy = [...pokemons];

      setPokemons(
        pokemonsCopy.sort((a: Pokemon, b: Pokemon) => {
          const sortTypes = (types: Type[]) =>
            types.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            });

          const sortedAName = sortTypes(a.types)[0].name;
          const sortedBName = sortTypes(b.types)[0].name;

          if (sortedAName < sortedBName) {
            return -1;
          }
          if (sortedAName > sortedBName) {
            return 1;
          }
          return 0;
        })
      );
    }

    if (sortName === "type" && sortDirection === "desc") {
      const pokemonsCopy = [...pokemons];

      setPokemons(
        pokemonsCopy.sort((a: Pokemon, b: Pokemon) => {
          const sortTypes = (types: Type[]) =>
            types.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });

          const sortedAName = sortTypes(a.types)[0].name;
          const sortedBName = sortTypes(b.types)[0].name;

          if (sortedAName > sortedBName) {
            return -1;
          }
          if (sortedAName < sortedBName) {
            return 1;
          }
          return 0;
        })
      );
    }
  }, [sortDirection, sortName, setPokemons, pokemons]);

  return { handleClickName, handleClickType, sortDirection, sortName };
}
