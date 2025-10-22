import React, { Component } from 'react'

export class Message extends Component {
  
       constructor() {
           super()
       
           this.state = {
                message: 'Welcome Visitor'
           }
       }

       information() {
           this.setState({
               message: 'Thanks for visiting our website'
           })
       }

  render() {
    return (
      <div>
        <div>{this.state.message} </div>
        <button onClick={() => this.information()}>Thankyou</button>
      </div>
    )
  }
}

export default Message