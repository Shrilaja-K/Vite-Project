import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';


function withNavigation(Component) {
  return function(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

class Ordersummary extends Component {
  render() {
    return (
      <>
        <div>Order placed</div>
        <button onClick={() => this.props.navigate(-1)}>Back</button>
      </>
    );
  }
}

export default withNavigation(Ordersummary);
