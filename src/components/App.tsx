import Header from "./Header";
import Container from "./Container";

function App() {
  // const { isLoading, error } = usefetchPokemons();

  // if (isLoading) return <p>Loading...</p>;

  // if (error) return <p>{error.toString()}</p>;

  return (
    <div className="pt-20">
      <Header />
      <Container />
    </div>
  );
}

export default App;
