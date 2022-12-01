import { useContext } from "react";
import { PokemonsContext } from "../contexts/Pokemon";
import Detail from "./Detail";

export default function List() {
  const { pokemons } = useContext(PokemonsContext);

  return (
    <main className="grid grid-cols-5 gap-4 px-4">
      {pokemons.map((pokemon) => (
        <Detail key={pokemon.id} {...pokemon} />
      ))}
    </main>
  );
}
