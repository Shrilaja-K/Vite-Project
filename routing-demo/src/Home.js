import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';


function withNavigation(Component) {
  return function(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

class Home extends Component {
  render() {
    return (
      <>
        <div>Home Page</div>
        <button onClick={() => this.props.navigate('order-summary')}>Place Order</button>
      </>
    );
  }
}

export default withNavigation(Home);
