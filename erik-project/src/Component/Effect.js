import React, { useState, useEffect } from 'react'
function Background() {
  const [color, setColor] = useState('#fff')
  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
      setColor(randomColor)
    }, 1000)
    return () => clearInterval(interval)
  })
  return (
    <div style={{ backgroundColor: color }}>
      <h1>Background</h1>
    </div>
  )
}