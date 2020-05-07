import React, { useState } from "react";

const TestWidget = (props) => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  function clearState() {
    setCounter(0);
  }

  if (counter === 5) {
    // Simulate a JS error
    throw new Error("I crashed!");
  }
  return (
    <div>
      <button onClick={handleClick}>{counter}</button>
      <button onClick={clearState}>Clear</button>
    </div>
  );
};

export default TestWidget;
