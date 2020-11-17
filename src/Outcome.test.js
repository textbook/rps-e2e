import { render } from "@testing-library/react";

import Outcome from "./Outcome";

describe("App component", () => {
  it("displays 'Right wins!' when right wins", () => {
    const { getByTestId } = render(<Outcome result="right" />);
    expect(getByTestId("outcome")).toHaveTextContent("Right wins!");
  });
});
