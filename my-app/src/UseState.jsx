import { useState } from "react";

function Usestate() {
  const [count, setCount] = useState(0);   // state define

  
  const increment = () => {
    setCount(count + 1);
  };

  
  const decrement = () => {
    setCount(count - 1);
  };

 
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Usestate;