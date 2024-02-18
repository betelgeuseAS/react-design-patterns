/*
Compound Components

The Compound Components Pattern is a React design pattern for managing parent components that are made up of child
components.

The principle behind this pattern is to break down the parent component into smaller components and then manage the
interactions between these smaller components with either props, context or other react data management techniques.

This pattern comes in handy when there is a need to create reusable, versatile components made up of smaller
components. It enables developers to create sophisticated UI components that can be readily customized and extended
while maintaining a clear and simple code structure.
*/

// An example of a use case of the compound components pattern is shown below:

import React, { createContext, useState, useContext } from "react";

const ToggleContext = createContext();

function Toggle({ children }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

Toggle.On = function ToggleOn({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
};

Toggle.Off = function ToggleOff({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
};

Toggle.Button = function ToggleButton(props) {
  const { toggle } = useContext(ToggleContext);
  return <button onClick={toggle} {...props} />;
};

function App() {
  return (
    <Toggle>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button>Toggle</Toggle.Button>
    </Toggle>
  );
}
