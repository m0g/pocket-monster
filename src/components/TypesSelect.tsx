import { useCallback, useContext } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function TypesSelect() {
  const { types, selectedType, setSelectedType } = useContext(PokemonsContext);

  const handleChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <select value={selectedType} onChange={handleChange}>
      <option></option>
      {types.map((type, i) => (
        <option key={i}>{type}</option>
      ))}
    </select>
  );
}
