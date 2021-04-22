import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import '../public/HostFilter.css'

const HostFilter = (props) => {
  const [providers, setProviders] = useState({
    netflix: false,
    amazon: false,
    disney: false,
  });

  const handleChange = (provider, checked) => {
    setProviders((prevState) => {
      const newState = { ...prevState };
      newState[provider] = checked;
      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setProviders(providers);
    navigate('/waitingroom');
  };

  return (
    <div className='filter-page'>
      <h1>{`Hi Jonathan${props.name}!`}</h1>

      <form className='filter-form' onSubmit={handleSubmit}>
        <h2>What are you watching on?</h2>
        <div>
        <input
          onChange={(e) => handleChange(e.target.id, e.target.checked)}
          type='checkbox'
          id='netflix'
          name='netflix'
          value='netflix'
        />
        <label htmlFor='netflix'>Netflix</label>
        <br />
        <input
          onChange={(e) => handleChange(e.target.id, e.target.checked)}
          type='checkbox'
          id='amazon'
          name='amazon'
          value='amazon'
        />
        <label htmlFor='amazon'>Amazon Prime</label>
        <br />
        <input
          onChange={(e) => handleChange(e.target.id, e.target.checked)}
          type='checkbox'
          id='disney'
          name='disney'
          value='disney'
        />
        <label htmlFor='disney'>Disney</label>

        </div>
        <h2>Select a Genre</h2>
        <button className='genre-button'>All</button>
        <button className='genre-button'>Action</button>
        <button className='genre-button'>Comedy</button>
        <button className='genre-button'>Horror</button>
        <button className='genre-button'>Sci-fi</button>
        <button className='button'>Create Room</button>{' '}
      </form>
    </div>
  );
};

export default HostFilter;
