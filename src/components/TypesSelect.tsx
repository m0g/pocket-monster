// import { useContext } from "react";
// import { PokemonsContext } from "../contexts/Pokemon";
import useSelectType from "../hooks/selectType";

export default function TypesSelect() {
  // const { types, selectedType, setSelectedType } = useContext(PokemonsContext);
  const { types, selectedType, setSelectedType } = useSelectType();

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
