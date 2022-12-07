import { useContext, useState } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function Sort() {
  const { sortDirection, sortName, handleClickName, handleClickType } =
    useContext(PokemonsContext);

  return (
    <div className="px-4 max-w-7xl mx-auto flex gap-2 mb-2">
      <b className="font-bold">Sort by:</b>
      <button onClick={handleClickName}>
        Name {sortName === "name" && (sortDirection === "desc" ? "⬆️" : "⬇️")}
      </button>
      <button onClick={handleClickType}>
        Type {sortName === "type" && (sortDirection === "desc" ? "⬆️" : "⬇️")}
      </button>
    </div>
  );
}
