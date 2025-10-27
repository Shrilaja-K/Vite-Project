import React, { Component } from 'react';
import { AuthContext } from './AuthContext';
import { withRouter } from './withRouter';

class Profile extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    if (!this.context.user) {
      this.props.navigate('/login'); 
    }
  }

  handleLogout = () => {
    this.context.logout();
    this.props.navigate('/');
  };

  render() {
    const { user } = this.context;
    if (!user) return null; 
    return (
      <div style={{ marginTop: '2rem' }}>
        <h2>Welcome, {user}!</h2>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(Profile);
