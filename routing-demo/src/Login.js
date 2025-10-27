import React, { Component } from 'react';
import { AuthContext } from './AuthContext';
import { withRouter } from './withRouter';

class Login extends Component {
  static contextType = AuthContext;

  state = { username: '' };

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleLogin = () => {
    if (this.state.username.trim() === '') return;
    this.context.login(this.state.username);
    this.props.navigate('/'); 
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <h2>Login Page</h2>
        <label>
          Username:{' '}
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.handleLogin} style={{ marginLeft: '10px' }}>
          Login
        </button>
      </div>
    );
  }
}

export default withRouter(Login);
