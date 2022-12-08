import List from "../components/List";
import Sort from "../components/Sort";
import Header from "../components/Header";
import usefetchPokemons from "./../hooks/fetchPokemons";

export default function Home() {
  const { isLoading, error } = usefetchPokemons({ onlyFavorites: false });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.toString()}</p>;

  return (
    <div className="pt-20">
      <Header />
      <div>
        <Sort />
        <List />
      </div>
    </div>
  );
}
