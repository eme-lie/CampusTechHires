import { useState } from "react";

function Button({
  buttonTitle,
  initialState,
}: {
  buttonTitle: string;
  initialState: number;
}) {
  const [counter, setCounter] = useState(initialState);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>{buttonTitle}</button>
    </div>
  );
}

export default Button;
