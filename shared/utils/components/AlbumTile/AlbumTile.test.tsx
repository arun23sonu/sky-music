import React from "react";
import { render, screen } from "@testing-library/react";
import AlbumTile from "./AlbumTile";

describe("Header Component", () => {
  it("rendered Header", () => {
    const { getByTestId } = render(<AlbumTile />);
    const input = getByTestId("album");
    expect(input).toBeTruthy();
  });
});
