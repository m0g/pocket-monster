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

  const [error, setError] = useState(null);

  useEffect(() => {
    const getOnlyFavorites = (pokemons) => {
      // const pokemonsCopy = [...pokemons];
      return pokemons.filter(({ isFavorite }) => isFavorite);
    };

    if (localStorage.getItem("allPokemons")) {
      const store = JSON.parse(localStorage.getItem("allPokemons") || "{}");

      setTimeout(() => {
        setPokemons(onlyFavorites ? getOnlyFavorites(store) : store);
        setAllPokemons(store);
        setIsLoading(false);
        console.log(onlyFavorites ? getOnlyFavorites(store) : store);
      });
    } else {
      fetchGraphQL(GetAllPokemons, {})
        .then((data) => {
          if (data?.allPokemon) {
            const pokemonsWithFavorites = data.allPokemon.map((pokemon) => ({
              ...pokemon,
              isFavorite: false,
            }));

            setPokemons(
              onlyFavorites
                ? getOnlyFavorites(pokemonsWithFavorites)
                : pokemonsWithFavorites
            );
            setAllPokemons(pokemonsWithFavorites);
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
