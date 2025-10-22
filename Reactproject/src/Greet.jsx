import React, { Component } from 'react'

export class Greet extends Component {
  render() {
    return (
      <div>Welcome {this.props.name}
      {this.props.children}</div>
    )
  }
}

export default Greet