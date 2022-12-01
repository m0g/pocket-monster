import fetchGraphQL from "./../fetchGraphQL";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function usefetchPokemons() {
  const {
    pokemons,
    setPokemons,
    allPokemons,
    setAllPokemons,
    isLoading,
    setIsLoading,
  } = useContext(PokemonsContext);

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     fetchGraphQL(
  //       `query ExampleQuery($allPokemonLimit: Int) {
  //       allPokemon(limit: $allPokemonLimit) {
  //       id
  //       name
  //       types {
  //           name
  //       }
  //       sprites {
  //           front_default
  //       }
  //       }
  //   }`,
  //       {}
  //     ),
  // });

  useEffect(() => {
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
    ).then((data) => {
      if (data?.allPokemon) {
        // console.log(data.allPokemon.slice(0, 10));
        setPokemons(data.allPokemon);
        setAllPokemons(data.allPokemon);
      }
      setIsLoading(false);
    });
  }, []);

  // if (data?.allPokemon) {
  //   // console.log(data.allPokemon.slice(0, 10));
  //   setPokemons(data.allPokemon);
  //   setAllPokemons(data.allPokemon);
  // }

  return { isLoading, pokemons };
}
