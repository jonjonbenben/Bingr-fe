import React from 'react';
import { Link } from '@reach/router';

const HostFilter = (props) => {
  console.dir(props);

  return (
    <div>
      <h1>{`Welcome to Bingr ${props.name}`}</h1>

      <form>
        <h2>What are you watching on?</h2>

        <p>Netflix</p>
        <p>Amazon</p>
        <p>Disney</p>
        <h2>Categories</h2>
        <p>Most Popular</p>

        <Link to={`/waitingroom/${props.name}`}>
          <button>Create Room</button>
        </Link>
      </form>
    </div>
  );
};

export default HostFilter;
