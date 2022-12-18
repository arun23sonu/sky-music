import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResult from "./SearchResult";
describe("SearchResult Component", () => {
  it("rendered SearchResult", () => {
    const { getByTestId } = render(<SearchResult />);
    const input = getByTestId("search-result");
    expect(input).toBeTruthy();
  });
});
