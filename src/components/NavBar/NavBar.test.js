import { render, screen } from "@testing-library/react";
import React from "react";
import NavBar from "./NavBar";

describe('NavBar component', () => {
    it("Should match snapshot", () => {
      const { container } = render(<NavBar />);
      expect(container).toMatchSnapshot();
    });
    test('should display "SWIGGY', () => {
      render(<NavBar />);
      screen.getByText("SWIGGY");
    });
  });