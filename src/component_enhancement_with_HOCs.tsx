/*
Component enhancement with HOCs (higher-order components)

A higher-order component takes in a component as an argument and returns a supercharged component injected with
additional data or functionality. The possibility of HOCs in React is due to React preference of composition over
inheritance.

The Higher-Order Component (HOC) pattern offers a mechanism to increase or modify a component's functionality,
facilitating component reuse and code sharing.
*/

// An example of the HOC pattern is shown below:

import React from "react";

const higherOrderComponent = Component => {
  return class HOC extends React.Component {
    state = { name: 'John Doe' };

    render() {
      return <Component name={this.state.name} {...this.props} />;
    };
  };
};

const AvatarComponent = (props) => {
  return (
    <div class="flex items-center justify-between">
      <div class="rounded-full bg-red p-4">{props.name}</div>

      <div>
        <p>I am a {props.description}.</p>
      </div>
    </div>
  );
};

const SampleHOC = higherOrderComponent(AvatarComponent);

const App = () => {
  return (
    <div>
      <SampleHOC description="Frontend Engineer" />
    </div>
  );
};

export default App;

/*
In the code above, the is supplied props by the higherOrderComponent, which it will utilize internally.
*/
