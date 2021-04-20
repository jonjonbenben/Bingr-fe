import React, { useState, useEffect } from 'react';
import HostFilter from './HostFilter';
import { Link } from '@reach/router';
const Login = () => {
  const [name, setName] = useState('');

  return (
    <section>
      <h1>Bingr!!!!</h1>

      <form>
        <input
          onChange={(e) => {
            //console.dir(e.target.value);
            setName(e.target.value);
            console.log(name, 'JHDJHDSSHDHDHJ');
          }}
          type='text'
        ></input>
        <button>SubmitName</button>
      </form>

      <Link key={name} to={`/${name}/hostfilter`}>
        {' '}
        Host{' '}
      </Link>

      <button>Join Game</button>
    </section>
  );
};

export default Login;
