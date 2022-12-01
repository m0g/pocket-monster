import SearchForm from "./components/SearchForm";
import fetchGraphQL from "./fetchGraphQL";
import { useQuery } from "@tanstack/react-query";
import usefetchPokemons from "./hooks/fetchPokemons";
import { List } from "./components/List";

function App() {
  const { isLoading, error } = usefetchPokemons();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="">
      <header>
        <h1 className="text-3xl font-bold">Pocket monsters</h1>
        <SearchForm />
      </header>
      <List />
    </div>
  );
}

export default App;
