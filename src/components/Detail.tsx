import { useContext } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function Detail({
  id,
  name,
  sprites,
  types,
  isFavorite,
}: Pokemon) {
  // const [isFavorite, setIsFavorite] = useState(false);
  const { toggleFavorite } = useContext(PokemonsContext);

  const handleClick = () => {
    toggleFavorite(id, !isFavorite);
  };

  return (
    <figure className="bg-slate-300 rounded flex shadow-sm relative">
      <img src={sprites.front_default} />
      <div>
        <h3>{name}</h3>
        <div className="flex flex-row gap-2">
          {types.map((type, i) => (
            <div key={i} className="bg-blue-700 text-white">
              {type.name}
            </div>
          ))}
        </div>
        <svg
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          fill={isFavorite ? "yellow" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute right-2 bottom-2 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      </div>
    </figure>
  );
}
