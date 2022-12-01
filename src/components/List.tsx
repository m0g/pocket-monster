import { useContext } from "react";
import { PokemonsContext } from "../contexts/Pokemon";
import Detail from "./Detail";

export function List() {
  const { pokemons } = useContext(PokemonsContext);

  console.log(pokemons);
  return (
    <main className="grid grid-cols-5 gap-4">
      {pokemons.map((pokemon) => (
        <Detail {...pokemon} />
      ))}
    </main>
  );
}
