import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';

function withSearchParams(ComponentToWrap) {
  return function Wrapped(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    return <ComponentToWrap {...props} searchParams={searchParams} setSearchParams={setSearchParams} />;
  };
}

class Users extends Component {
  render() {
    const { searchParams, setSearchParams } = this.props;
    const showActiveUsers = searchParams.get('filter') === 'active';

    return (
      <div>
        <h3>User1</h3>
        <h3>User2</h3>
        <h3>User3</h3>
        <div>
          <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
          <button onClick={() => setSearchParams({})}>Reset Filter</button>
        </div>
        {showActiveUsers ? <h4>Showing Active Users</h4> : <h4>Showing All Users</h4>}
      </div>
    );
  }
}

export default withSearchParams(Users);
