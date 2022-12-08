import List from "../components/List";
import Sort from "../components/Sort";
import usefetchPokemons from "../hooks/fetchPokemons";

export default function Favorites() {
  const { isLoading, error } = usefetchPokemons();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.toString()}</p>;

  return (
    <div>
      <p>My favorites</p>
      <List />
    </div>
  );
}
