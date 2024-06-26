import React, { useState } from 'react'

export const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  )
}
