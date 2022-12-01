import fetchGraphQL from "./../fetchGraphQL";
import { useContext, useEffect } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

const GetAllPokemons = `
  query GetAllPokemons($allPokemonLimit: Int) {
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
  }
`;

export default function usefetchPokemons() {
  const {
    pokemons,
    setPokemons,
    allPokemons,
    setAllPokemons,
    isLoading,
    setIsLoading,
  } = useContext(PokemonsContext);

  useEffect(() => {
    fetchGraphQL(GetAllPokemons, {}).then((data) => {
      if (data?.allPokemon) {
        setPokemons(data.allPokemon);
        setAllPokemons(data.allPokemon);
      }
      setIsLoading(false);
    });
  }, []);

  return { isLoading, pokemons };
}
