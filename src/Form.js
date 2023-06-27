import { useState } from "react";

export default function Form({ onSubmit }) {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    onSubmit([left, right]);
  };

  return (
    <form onSubmit={submitForm}>
      <Selector label="Left" onSelect={setLeft} />
      <Selector label="Right" onSelect={setRight} />
      <button>Throw</button>
    </form>
  );
}

function Selector({ label, onSelect }) {
  return (
    <label>
      {label}
      <select defaultValue="" onChange={({ target: { value } }) => onSelect(value)}>
        <option disabled value="">Select a weapon...</option>
        {["rock", "paper", "scissors"].map((weapon) => (
          <option key={weapon} value={weapon}>{weapon}</option>
        ))}
      </select>
    </label>
  )
}
