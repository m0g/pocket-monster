import { useContext } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function Search() {
  const { query, setQuery } = useContext(PokemonsContext);
  const handleChange = (e) => setQuery(e.target.value);

  return (
    <input
      type="text"
      placeholder="Search"
      className="px-2"
      onChange={handleChange}
      value={query}
    />
  );
}
