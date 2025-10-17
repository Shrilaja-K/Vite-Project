import React, { Component } from 'react'

export class Classclick extends Component {
    clickhandler(){
        console.log("Class Button clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>Click Here</button>
      </div>
    )
  }
}

export default Classclick