import SearchForm from "./components/SearchForm";
import fetchGraphQL from "./fetchGraphQL";
import { useQuery } from "@tanstack/react-query";
import usefetchPokemons from "./hooks/fetchPokemons";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const { isLoading, error } = usefetchPokemons();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="pt-20">
      <Header />
      <List />
    </div>
  );
}

export default App;
