import List from "./List";
import Sort from "./Sort";
import usefetchPokemons from "./../hooks/fetchPokemons";

export default function Container() {
  const { isLoading, error } = usefetchPokemons();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.toString()}</p>;

  return (
    <div>
      <Sort />
      <List />
    </div>
  );
}
