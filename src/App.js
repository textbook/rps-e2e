import { useState } from "react";

import Form from "./Form";
import Outcome from "./Outcome";
import { rps } from "./rpsService";

function App() {
  const [result, setResult] = useState();
  
  const onThrow = ([left, right]) => {
    setResult(rps(left, right));
  }
  
  return (
    <div>
      <Form onSubmit={onThrow} />
      {result && <Outcome result={result} />}
    </div>
  );
}

export default App;
