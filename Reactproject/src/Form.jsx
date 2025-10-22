import React, { Component } from 'react'

 class Form extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
            username:'',
            comments:'',
            topic:'react'
      }
    }
    
    handleusername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    handlecomments=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }

    changetopic=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handlesubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
    return (
        <form onSubmit={this.handlesubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value={this.state.username} onChange={this.handleusername} />
            </div>
            <div>
                <label>Comments:</label>
                <textarea value={this.state.comments} onChange={this.handlecomments}/>
            </div>
            <div>
                <label>Topic:</label>
                <select value={this.state.topic} onChange={this.changetopic}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button type="submit">Submit</button>
       </form>
    )
  }
}

export default Form