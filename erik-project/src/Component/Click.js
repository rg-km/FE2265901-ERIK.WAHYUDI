import React, { useState } from "react";

const Click = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>
        You click {count} times
      </button>
    </div>
  );
};

export default Click;
