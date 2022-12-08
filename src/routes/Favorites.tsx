import List from "../components/List";
import usefetchPokemons from "../hooks/fetchPokemons";
import Header from "../components/Header";

export default function Favorites() {
  const { isLoading, error } = usefetchPokemons({ onlyFavorites: true });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.toString()}</p>;

  return (
    <div className="pt-20">
      <Header disableFilters={true} />
      <div>
        <p>My favorites</p>
        <List />
      </div>
    </div>
  );
}
