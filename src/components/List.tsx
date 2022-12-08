import { useContext } from "react";
import { PokemonsContext } from "../contexts/Pokemon";
import Detail from "./Detail";
// import usefetchPokemons from "./../hooks/fetchPokemons";

export default function List() {
  const { pokemons } = useContext(PokemonsContext);
  // const { isLoading, pokemons, error } = usefetchPokemons();

  // if (isLoading) return <p>Loading...</p>;

  // if (error) return <p>{error.toString()}</p>;

  return (
    <main className="grid grid-cols-5 gap-4 px-4 max-w-7xl mx-auto">
      {pokemons.slice(0, 50).map((pokemon: Pokemon) => (
        <Detail key={pokemon.id} {...pokemon} />
      ))}
    </main>
  );
}
