import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';

const MovieCard = (props) => {
  const card = props.movieList[0];
  console.log(props);
  return (
    <div>
      <h1>{card.title}</h1>
      <p>{card.vote_average}</p>
      <p>{card.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} />
      <button>Cringr</button>
      <button>Bingr</button>
    </div>
  );
};

export default MovieCard;
