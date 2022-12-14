export {};

declare global {
  type Type = {
    name: string;
  };

  type Pokemon = {
    id: number;
    name: string;
    types: Type[];
    isFavorite: boolean;
    sprites: {
      front_default: string;
    };
  };

  type SortName = "name" | "type" | null;

  type SortDirection = "asc" | "desc";
}
