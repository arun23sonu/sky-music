import React from "react";
import { render, screen } from "@testing-library/react";
import AlbumSection from "./AlbumSection";

describe("Album Section Component", () => {
  it("rendered Album Section", () => {
    const { getByTestId } = render(<AlbumSection  />);
    const input = getByTestId("album-section");
    expect(input).toBeTruthy();
  });
});
