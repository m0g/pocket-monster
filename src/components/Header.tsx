import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-300 flex flex-row justify-between py-2 px-4 shadow">
      <h1 className="text-3xl font-bold">Pocket monsters</h1>
      <SearchForm />
    </header>
  );
}
