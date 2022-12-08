import { useContext, useEffect } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function useSearchPokemons() {
  const { setPokemons, allPokemons, query, setQuery } =
    useContext(PokemonsContext);

  useEffect(() => {
    setPokemons(allPokemons.filter(({ name }) => name.indexOf(query) !== -1));
  }, [query, allPokemons, setPokemons]);

  return {
    query,
    setQuery,
  };
}
