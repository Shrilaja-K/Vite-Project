 import React, { Component } from 'react'
 import ChildComponent from './ChildComponent'
 
 class ParentComponent extends Component {

       constructor(props) {
         super(props)
       
         this.state = {
            parentName: 'Parent'
         }

         this.greetparent=this.greetparent.bind(this)
       }

       greetparent(Childname){
        alert(`Hello ${this.state.parentName} from ${Childname}`)
       }
       

   render() {
     return (
       <div>
        <ChildComponent greetHandler={this.greetparent}/>
       </div>
     )
   }
 }
 
 export default ParentComponent