import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header test", () => {
  it("should render the header with the options", () => {
    const route = "/";
    render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/Pocket monsters/i)).toBeDefined();
    expect(screen.getByText(/Reset/i)).toBeDefined();
  });

  it("should render the header without the options", () => {
    const route = "/";
    render(
      <MemoryRouter initialEntries={[route]}>
        <Header disableFilters={true} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Pocket monsters/i)).toBeDefined();
    expect(screen.queryByText(/Reset/i)).toBeNull();
  });
});
