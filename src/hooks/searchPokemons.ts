import { useContext, useEffect } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function useSearchPokemons() {
  const { setPokemons, allPokemons, query, setQuery } =
    useContext(PokemonsContext);

  useEffect(() => {
    console.log("query set pokemon");
    setPokemons(allPokemons.filter(({ name }) => name.indexOf(query) !== -1));
  }, [query, allPokemons]);

  return {
    query,
    setQuery,
  };
}
