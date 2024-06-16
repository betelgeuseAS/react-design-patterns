import React from 'react'

export const App = (props) => {
  if (props.isLoading) {
    return (<p>Loading...</p>)
  }

  return props.isAuthenticated
    ? (<p>Welcome back, {props.username}!</p>)
    : (<p>Please sign in.</p>);
}
