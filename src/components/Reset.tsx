import { useContext } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function Reset() {
  const { reset } = useContext(PokemonsContext);

  return <button onClick={reset}>Reset</button>;
}
