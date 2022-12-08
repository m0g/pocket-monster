import Search from "./Search";
import Reset from "./Reset";
import TypesSelect from "./TypesSelect";
import { Link } from "react-router-dom";

export default function Header({
  disableFilters = false,
}: {
  disableFilters?: boolean;
}) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-300 flex flex-row justify-between py-2 px-4 shadow z-10">
      <div className="flex gap-2">
        <img src="/logo.png" className="w-10 h-10" />
        <Link to="/">
          <h1 className="text-3xl font-bold">Pocket monsters</h1>
        </Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      {!disableFilters && (
        <div className="flex gap-2">
          <TypesSelect />
          <Search />
          <Reset />
        </div>
      )}
    </header>
  );
}
