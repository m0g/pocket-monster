import useSearchPokemons from "../hooks/searchPokemons";

export default function Search() {
  const { query, setQuery } = useSearchPokemons();
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
