import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
// import '../public/HostFilter.css';
import { initiateMovieList } from '../movieList';
import { formatGamesRoomMovies } from '../utils/utils';
import { createGameRoom } from '../utils/createGameRoom';
import { codeGenerator } from '../codeGenerator';

const HostFilter = (props) => {
  const [providers, setProviders] = useState([]);

  const [categories, setCategories] = useState([]);

  const handleChange = (provider, checked, className) => {
    const id = Number(provider);

    if (className === 'setProviders') {
      setProviders((prevState) => {
        return updateState(id, checked, prevState);
      });
    } else {
      setCategories((prevState) => {
        return updateState(id, checked, prevState);
      });
    }

    const updateState = (id, checked, prevState) => {
      if (checked) {
        const newState = [...prevState, id];
        return newState;
      } else {
        const newState = [...prevState];
        const index = newState.indexOf(id);
        newState.splice(index, 1);
        return newState;
      }
    };
  };
  useEffect(() => {
    const code = codeGenerator();
    props.setRoomCode(code);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    initiateMovieList(providers, categories)
      .then((res) => {
        props.setMovieList(res);
        return res;
      })
      .then((filteredMovies) => {
        const formattedMovies = formatGamesRoomMovies(filteredMovies);
        createGameRoom(
          props.roomCode,
          props.name,
          formattedMovies,
          filteredMovies
        );
        navigate('/waitingroom');
      });
  };

  return (
    <div className='filter-page'>
      <h1>{`Hi ${props.name}!`}</h1>

      <form className='filter-form' onSubmit={handleSubmit}>
        <h2>What are you watching on?</h2>
        <div>
          <input
            onChange={(e) =>
              handleChange(e.target.value, e.target.checked, e.target.className)
            }
            type='checkbox'
            id='netflix'
            name='netflix'
            value='8'
            className='setProviders'
          />
          <label htmlFor='netflix'>Netflix</label>
          <br />
          <input
            onChange={(e) =>
              handleChange(e.target.value, e.target.checked, e.target.className)
            }
            type='checkbox'
            id='amazon'
            name='amazon'
            value='9'
            className='setProviders'
          />
          <label htmlFor='amazon'>Amazon Prime</label>
          <br />
          <input
            onChange={(e) =>
              handleChange(e.target.value, e.target.checked, e.target.className)
            }
            type='checkbox'
            id='disney'
            name='disney'
            value='337'
            className='setProviders'
          />
          <label htmlFor='disney'>Disney</label>
        </div>
        <h2>Select a Genre</h2>
        <input
          onChange={(e) =>
            handleChange(e.target.value, e.target.checked, e.target.className)
          }
          type='checkbox'
          id='action'
          name='action'
          value='28'
          className='setCategory'
        />
        <label htmlFor='action'>Action</label>
        <input
          onChange={(e) =>
            handleChange(e.target.value, e.target.checked, e.target.className)
          }
          type='checkbox'
          id='comedy'
          name='comedy'
          value='35'
          className='setCategory'
        />
        <label htmlFor='comedy'>Comedy</label>
        <input
          onChange={(e) =>
            handleChange(e.target.value, e.target.checked, e.target.className)
          }
          type='checkbox'
          id='fantasy'
          name='fantasy'
          value='14'
          className='setCategory'
        />
        <label htmlFor='fantasy'>Fantasy</label>
        <input
          onChange={(e) =>
            handleChange(e.target.value, e.target.checked, e.target.className)
          }
          type='checkbox'
          id='horror'
          name='horror'
          value='27'
          className='setCategory'
        />
        <label htmlFor='horror'>Horror</label>
        <button className='button'>Create Room</button>{' '}
      </form>
    </div>
  );
};

export default HostFilter;
