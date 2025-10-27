import React, { Component, Children } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default class RequireAuth extends Component {
  static contextType = AuthContext;

  render() {
    const { user } = this.context;

    if (!user) {
      return <Navigate to="/login" />;
    }

    return <>{this.props.children}</>;
  }
}
