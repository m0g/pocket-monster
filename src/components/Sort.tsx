import { useState } from "react";

export default function Sort() {
  const [sortName, setSortName] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleClickName = () => {
    if (sortName === "name") {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortName("name");
      setSortDirection("asc");
    }
  };

  const handleClickType = () => {
    if (sortName === "type") {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortName("type");
      setSortDirection("asc");
    }
  };

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
