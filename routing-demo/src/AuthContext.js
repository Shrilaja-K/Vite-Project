import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

export class AuthProvider extends Component {
  state = { user: null };

  login = (username) => {
    this.setState({ user: username });
  };

  logout = () => {
    this.setState({ user: null });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
