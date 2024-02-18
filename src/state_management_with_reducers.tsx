/*
Most often, handling many states in a component leads to issues with many ungrouped states, which can be burdensome
and challenging to handle. The reducer pattern can be a helpful option in this situation. We can categorize states
using reducers into certain actions that, when executed, can change the grouped states.

This pattern allows the developer who uses it to control the component's and/or hook's state management, letting them
manage state changes when events are sent.
*/

// An example of using the reducer pattern is shown below:

import React, { useReducer } from "react";

const initState = {
  loggedIn: false,
  user: null,
  token: null
};

function authReducer(state, action) {
  switch (action.type) {
    case 'login':
      return {
        loggedIn: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case 'logout':
      return initState;
    default:
      break;
  }
}

const AuthComponent = () => {
  const [state, dispatch] = useReducer(authReducer, initState);

  const logIn = () => {
    dispatch({ type: 'login', payload: {
      user: { name: 'John Doe'},
      token: 'token'
    }});
  };

  const logOut = () => {
    dispatch({ type: 'logout' });
  };

  return (
    <div>
      {state.loggedIn ? (
        <div>
          <p>Welcome {state.user.name}</p>
          <button onClick={logOut}></button>
        </div>
      ) : (
        <form onSubmit={logIn}>
          <input type="text" />
          <input type="password" />
          <button type="submit"></button>
        </form>
      )}
    </div>
  );
};

/*
In the above code, the component dispatches two actions:
- The 'login' action type triggers a state change that affects three state values namely loggedIn, user, token.
- The 'logout' action simply resets the state to its initial value.
*/
