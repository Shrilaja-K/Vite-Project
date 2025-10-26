import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

function withRouter(ComponentToWrap) {
  return function (props) {
    const params = useParams();
    return <ComponentToWrap {...props} params={params} />;
  };
}

class UserDetails extends Component {
  render() {
    const { userId } = this.props.params;
    return (
      <div>
        Details of User {userId}
      </div>
    );
  }
}

export default withRouter(UserDetails);
