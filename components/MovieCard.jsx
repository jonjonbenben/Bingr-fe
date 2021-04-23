import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import { getMovie, incrementVote } from '../firebase-api';

const MovieCard = ({ roomCode }) => {
  const [currentFilm, setCurrentFilm] = useState({});
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if (counter < 19) {
      setCounter((prevState) => {
        const newState = prevState;
        console.log(newState, 'increment');
        return newState + 1;
      });
    } else {
      navigate('/result');
    }
  };

  useEffect(() => {
    getMovie(counter, roomCode).then((res) => {
      console.log(res);
      setCurrentFilm(res);
    });
  }, [counter]);

  const { title, vote_average, overview, poster_path, id } = currentFilm;

  return (
    <div>
      <h1>{title}</h1>
      <p>{vote_average}</p>
      <p>{overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <button
        onClick={() => {
          incrementCounter();
        }}
      >
        Cringr
      </button>
      <button
        onClick={() => {
          incrementCounter();
          incrementVote(roomCode, id);
        }}
      >
        Bingr
      </button>
    </div>
  );
};

export default MovieCard;
