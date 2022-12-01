import { useContext } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function useSearchPokemon() {
  const { setPokemons, allPokemons } = useContext(PokemonsContext);

  const onChange = (e) => {
    const query = e.target.value;

    if (query.length > 2) {
      const rep = allPokemons.filter(({ name }) => name.indexOf(query) !== -1);
      console.log(query, rep);
      setPokemons(rep);
    }
  };

  return { onChange };
}
