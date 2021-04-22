import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';

const MovieCard = ({movie, incrementCounter}) => {
  console.log(movie);
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.vote_average}</p>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <button onClick={() => {incrementCounter()}}>Cringr</button>
      <button onClick={() => {incrementCounter()}}>Bingr</button>
    </div>
  );
};

export default MovieCard;
