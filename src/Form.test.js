import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "./Form";

describe("Form component", () => {
  it("emits a pair of selections when the form is submitted", async () => {
    const left = "scissors";
    const right = "paper";
    const onSubmit = jest.fn();
    const user = userEvent.setup();
    render(<Form onSubmit={onSubmit} />);
    
    await user.selectOptions(screen.getByLabelText("Left"), left);
    await user.selectOptions(screen.getByLabelText("Right"), right);
    await user.click(screen.getByText("Throw"));

    expect(onSubmit).toHaveBeenCalledWith([left, right]);
  });
});
