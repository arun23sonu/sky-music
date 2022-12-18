import React from "react";
import { render, screen } from "@testing-library/react";
import AlbumTile from "./AlbumTile";

describe("Album Tile Component", () => {
  it("rendered Album Tile", () => {
    const { getByTestId } = render(<AlbumTile artist="" name={""} image={""} id={""}  />);
    const input = getByTestId("album");
    expect(input).toBeTruthy();
  });
});
