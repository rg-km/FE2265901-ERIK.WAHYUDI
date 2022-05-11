import React, { useState } from 'react'
function CounterBtn() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  )
}