import { render, screen } from "@testing-library/react";

import Outcome from "./Outcome";

describe("App component", () => {
  it("displays 'Right wins!' when right wins", () => {
    render(<Outcome result="right" />);
    expect(screen.getByTestId("outcome")).toHaveTextContent("Right wins!");
  });

  it("displays 'Left wins!' when left wins", () => {
    render(<Outcome result="left" />);
    expect(screen.getByTestId("outcome")).toHaveTextContent("Left wins!");
  });
});
