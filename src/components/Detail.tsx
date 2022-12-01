export default function Detail({ name, sprites, types }) {
  return (
    <figure className="bg-slate-300 rounded flex shadow-sm">
      <img src={sprites.front_default} />
      <div>
        <h3>{name}</h3>
        <div className="flex flex-row gap-2">
          {types.map((type) => (
            <div className="bg-blue-700 text-white">{type.name}</div>
          ))}
        </div>
      </div>
    </figure>
  );
}
