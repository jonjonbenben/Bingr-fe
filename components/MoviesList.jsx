import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = (props) => {
  const { roomCode } = props;
  return <MovieCard roomCode={roomCode} />;
};

export default MoviesList;
