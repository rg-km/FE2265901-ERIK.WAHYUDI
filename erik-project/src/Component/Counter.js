import React, { useState, useEffect } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (count !== 0) {
      setStatus("State telah berubah");
    } else {
      setStatus("");
    }
  }, [count]);
  return (
    <div>
      <h1>Hooks Count: {count}</h1>
      <p>{status}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
