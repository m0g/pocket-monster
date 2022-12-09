import useSearchPokemons from "../hooks/searchPokemons";

export default function Search() {
  const { query, handleChange } = useSearchPokemons();

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
