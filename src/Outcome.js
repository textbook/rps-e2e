export default function Outcome({ result }) {
  return <div data-testid="outcome">{display(result)}!</div>;
}

function display(result) {
  switch (result) {
    case "draw":
      return "Draw";
    case "left":
      return "Left wins";
    case "right":
      return "Right wins";
    default:
      throw new Error(`unknown result ${result}`);
  }
}
