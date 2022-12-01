import { useContext } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function Reset() {
  const { allPokemons, setPokemons } = useContext(PokemonsContext);
  const handleClick = () => setPokemons(allPokemons);

  return <button onClick={handleClick}>Reset</button>;
}
