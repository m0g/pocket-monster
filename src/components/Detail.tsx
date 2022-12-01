export default function Detail({ name, sprites }) {
  return (
    <figure className="bg-slate-300 rounded">
      <h3>{name}</h3>
      <img src={sprites.front_default} />
    </figure>
  );
}
