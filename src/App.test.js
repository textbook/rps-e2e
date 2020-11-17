import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App component", () => {
  it("displays right wins when appropriate", () => {
    // Arrange
    const { getByLabelText, getByTestId, getByText } = render(<App />);

    // Act
    userEvent.selectOptions(getByLabelText("Left"), "paper");
    userEvent.selectOptions(getByLabelText("Right"), "scissors");
    userEvent.click(getByText("Throw"));

    // Assert
    expect(getByTestId("outcome")).toHaveTextContent("Right wins!");
  });
});
