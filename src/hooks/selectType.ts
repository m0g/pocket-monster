import { useContext, useEffect, useState } from "react";
import { PokemonsContext } from "../contexts/Pokemon";

export default function useSelectType() {
  const [types, setTypes] = useState<string[]>([]);

  const { selectedType, setSelectedType, allPokemons, setPokemons } =
    useContext(PokemonsContext);

  if (allPokemons.length > 0 && types.length === 0) {
    setTypes(() => {
      const allTypes = [];
      for (const pokemon of allPokemons) {
        for (const type of pokemon.types) {
          if (allTypes.indexOf(type.name) === -1) {
            allTypes.push(type.name);
          }
        }
      }
      return allTypes;
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;

    setPokemons(() => {
      if (selectedType === "") {
        return allPokemons;
      }

      return allPokemons.filter(({ types }) => {
        let shouldInclude = false;

        for (const type of types) {
          if (type.name === selectedType) {
            shouldInclude = true;
          }
        }

        return shouldInclude;
      });
    });

    setSelectedType(selectedType);
  };

  return { types, selectedType, handleChange };
}
