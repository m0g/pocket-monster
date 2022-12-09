import { describe, it, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Detail from "./Detail";

describe("Detail test", () => {
  it("should render a pokemon", () => {
    const pokemon = {
      id: 1,
      name: "test",
      types: [{ name: "earth" }],
      isFavorite: false,
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
    };
    render(<Detail {...pokemon} />);
    expect(screen.getByText(/test/i)).toBeDefined();
    expect(screen.getByText(/earth/i)).toBeDefined();
  });
});
