import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("rendered Footer", () => {
    const { getByTestId } = render(<Footer />);
    const input = getByTestId("footer");
    expect(input).toBeTruthy();
  });
});
