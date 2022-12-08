import List from "./List";
import Header from "./Header";
import Sort from "./Sort";
import usefetchPokemons from "./../hooks/fetchPokemons";

function App() {
  const { isLoading, pokemons, error } = usefetchPokemons();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.toString()}</p>;

  return (
    <div className="pt-20">
      <Header />
      <Sort />
      <List />
    </div>
  );
}

export default App;
