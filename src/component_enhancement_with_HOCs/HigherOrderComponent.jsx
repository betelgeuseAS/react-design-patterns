import React from 'react'

export const HigherOrderComponent = (Component) => {
  return class HOC extends React.Component {
    state = { name: 'Name' }

    render() {
      return <Component name={this.state.name} {...this.props} />
    }
  }
}
