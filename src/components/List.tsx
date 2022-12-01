import Detail from "./Detail";
import usefetchPokemons from "./../hooks/fetchPokemons";

export default function List() {
  const { isLoading, pokemons } = usefetchPokemons();

  if (isLoading) return "Loading...";

  return (
    <main className="grid grid-cols-5 gap-4 px-4">
      {pokemons.slice(0, 50).map((pokemon) => (
        <Detail key={pokemon.id} {...pokemon} />
      ))}
    </main>
  );
}
