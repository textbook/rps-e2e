import { render, screen } from "@testing-library/react";

import Outcome from "./Outcome";

describe("App component", () => {
  it("displays 'Right wins!' when right wins", () => {
    render(<Outcome result="right" />);
    expect(screen.getByTestId("outcome")).toHaveTextContent("Right wins!");
  });
});
