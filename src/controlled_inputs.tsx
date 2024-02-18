/*
Controlled inputs

The Controlled Input pattern can be used to handle input fields. This pattern involves using an event handler to update
the component state if the value of an input field changes, as well as storing the current value of the input field in
the component state.

Because React controls the state and behavior of the component, this pattern makes code more predictable and readable
than the uncontrolled inputs pattern, which does not use the component's state and instead controls it directly through
the DOM (Document object model).
*/

// An example of a use case of a controlled inputs pattern is shown below:

import React, { useState } from "react";

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );
}
