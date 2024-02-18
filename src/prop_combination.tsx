/*
Prop combination

This entails creating a single object out of several related props and passing it as a single prop to the component.

This pattern allows us to clean up our code and make it simpler to manage the props, making it especially helpful when
we want to pass a lot of related properties to a component.
*/

import React from "react";

function P(props): React.FC {
  const { color, size, children, ...rest } = props;

  return (
    <p style={{ color, fontSize: size }} {...rest}>
      { children }
    </p>
  );
}

function App() {
  const paragraphProps = {
    color: "red",
    size: "20px",
    lineHeight: "22px"
  };

  return <P {...paragraphProps}>This is a P</P>;
}
