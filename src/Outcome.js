function Outcome({ result }) {
  return <div data-testid="outcome">{result === "right" ? "Right" : "Left"} wins!</div>;
}

export default Outcome;
