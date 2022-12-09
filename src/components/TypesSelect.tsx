import useSelectType from "../hooks/selectType";

export default function TypesSelect() {
  const { types, selectedType, handleChange } = useSelectType();

  return (
    <select value={selectedType} onChange={handleChange}>
      <option></option>
      {types.map((type, i) => (
        <option key={i}>{type}</option>
      ))}
    </select>
  );
}
