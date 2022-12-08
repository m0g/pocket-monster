import fetchGraphQL from "./../fetchGraphQL";
import { useContext, useEffect, useState } from "react";
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
  const { pokemons, setPokemons, setAllPokemons, isLoading, setIsLoading } =
    useContext(PokemonsContext);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("allPokemons")) {
      const store = JSON.parse(localStorage.getItem("allPokemons") || "{}");

      setTimeout(() => {
        setPokemons(store);
        setAllPokemons(store);
        setIsLoading(false);
      });
    } else {
      fetchGraphQL(GetAllPokemons, {})
        .then((data) => {
          if (data?.allPokemon) {
            setPokemons(data.allPokemon);
            setAllPokemons(data.allPokemon);
          }
          setIsLoading(false);
        })
        .catch((e) => {
          setError(e);
          setIsLoading(false);
        });
    }
  }, [setAllPokemons, setPokemons, setIsLoading, setError]);

  return { isLoading, pokemons, error };
}
