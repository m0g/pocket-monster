import useSearchPokemon from "../hooks/searchPokemons";

export default function Search() {
  const { onChange } = useSearchPokemon();

  return (
    <input
      type="text"
      placeholder="Search"
      className="px-2"
      onChange={onChange}
    />
  );
}
