import React, { Component } from 'react';

class ClassComponent extends Component {
constructor(props){
  console.log("1st constructor")
  super(props);
  this.state={
    name:"ABC"
  }
}

   componentDidMount(){
    console.log("Didmount render")
    this.setState({
      name:"Name changed to CBA"  
    })
   }
  
   static getDerivedStateFromProps(props,state){
    console.log("Derived",state)
    return{name:state.name}
   }


  render() {
    console.log("2nd render")
    return (
      <div>
        <h4>"Lifecycle methods"</h4>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default ClassComponent;
