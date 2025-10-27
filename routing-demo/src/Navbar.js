import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default class Navbar extends Component {
  static contextType = AuthContext;

  navlinkstyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
      marginRight: '10px'
    };
  };

  render() {
    const { user } = this.context;
    return (
      <nav className="primary-nav">
        <NavLink style={this.navlinkstyle} to="/">Home</NavLink>
        <NavLink style={this.navlinkstyle} to="/about">About</NavLink>
        <NavLink style={this.navlinkstyle} to="/products">Products</NavLink>
        <NavLink style={this.navlinkstyle} to="/profile">Profile</NavLink>
        {!user && <NavLink style={this.navlinkstyle} to="/login">Login</NavLink>}
      </nav>
    );
  }
}
