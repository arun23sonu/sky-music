import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
    it("rendered Header", () => {
      const { getByTestId } = render(
            <Header/>
      );
      const input = getByTestId("header");
      expect(input).toBeTruthy();
    });
})