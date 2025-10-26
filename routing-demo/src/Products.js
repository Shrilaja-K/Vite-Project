import React, { Component } from 'react'
import { Link,Outlet } from 'react-router-dom'

export default class Products extends Component {
  render() {
    return (
        <>
      <div>
        <input type='search' placeholder='Search Products'/>
      </div>
      <nav>
      <Link to='featured'>Featured</Link> 
       <Link to='new'>New</Link>
       </nav>
       <Outlet />
      </>
    )
  }
}
