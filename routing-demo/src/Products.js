import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Products extends Component {
  render() {
    return (
        <>
      <div>
        <input type='search' placeholder='Search Products'/>
      </div>
      <nav>
      <Link to='Featured'>Featured</Link> 
       <Link to='New'>New</Link>
       </nav>
      </>
    )
  }
}
