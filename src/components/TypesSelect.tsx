import useSelectType from "../hooks/selectType";

export default function TypesSelect() {
  const { types, selectedType, setSelectedType } = useSelectType();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
