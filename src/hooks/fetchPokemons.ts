import fetchGraphQL from "./../fetchGraphQL";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function usefetchPokemons() {
  const { pokemons, setPokemons, allPokemons, setAllPokemons } =
    useContext(PokemonsContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetchGraphQL(
        `query ExampleQuery($allPokemonLimit: Int) {
        allPokemon(limit: $allPokemonLimit) {
        id
        name
        types {
            name
        }
        sprites {
            front_default
        }
        }
    }`,
        {}
      ),
  });

  if (data?.allPokemon) {
    setPokemons(data.allPokemon);
    // setAllPokemons(data.allPokemon);
  }

  return { isLoading, error, data, pokemons };
}
