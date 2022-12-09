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

export default function usefetchPokemons({ onlyFavorites = false }) {
  const { pokemons, setPokemons, setAllPokemons, isLoading, setIsLoading } =
    useContext(PokemonsContext);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log("fetch");
    const getOnlyFavorites = (pokemons: Pokemon[]) => {
      return pokemons.filter(({ isFavorite }) => isFavorite);
    };

    if (localStorage.getItem("allPokemons")) {
      const store = JSON.parse(localStorage.getItem("allPokemons") || "{}");

      setTimeout(() => {
        setPokemons(onlyFavorites ? getOnlyFavorites(store) : store);
        setAllPokemons(store);
        setIsLoading(false);
      });
    } else {
      fetchGraphQL(GetAllPokemons)
        .then((data) => {
          if (data?.allPokemon) {
            const pokemonsWithFavorites = data.allPokemon.map(
              (pokemon: Pokemon) => ({
                ...pokemon,
                isFavorite: false,
              })
            );

            setPokemons(
              onlyFavorites
                ? getOnlyFavorites(pokemonsWithFavorites)
                : pokemonsWithFavorites
            );
            setAllPokemons(pokemonsWithFavorites);
          }
          setIsLoading(false);
        })
        .catch((e: Error) => {
          setError(e);
          setIsLoading(false);
        });
    }
  }, [setAllPokemons, setPokemons, setIsLoading, setError, onlyFavorites]);

  return { isLoading, pokemons, error };
}
