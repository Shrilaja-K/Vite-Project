import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {

   navlinkstyle=({isActive})=>{ 
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

  render() {
    return (
        <nav className='primary-nav'>
    <NavLink style={this.navlinkstyle} to="/">Home
    </NavLink> 
    <NavLink style={this.navlinkstyle} to="/about">About   
    </NavLink> 
    <NavLink style={this.navlinkstyle} to="/Products">Products  
    </NavLink>
    </nav>
    )
  }
}
