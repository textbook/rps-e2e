import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App component", () => {
  it("displays right wins when appropriate", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<App />);

    // Act
    await user.selectOptions(screen.getByLabelText("Left"), "paper");
    await user.selectOptions(screen.getByLabelText("Right"), "scissors");
    await user.click(screen.getByText("Throw"));

    // Assert
    expect(screen.getByTestId("outcome")).toHaveTextContent("Right wins!");
  });
});
