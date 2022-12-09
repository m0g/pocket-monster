import { useContext } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function useSearchPokemons() {
  const { setPokemons, allPokemons, query, setQuery } =
    useContext(PokemonsContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemons(
      allPokemons.filter(({ name }) => name.indexOf(e.target.value) !== -1)
    );
    setQuery(e.target.value);
  };

  return {
    handleChange,
    query,
    setQuery,
  };
}
