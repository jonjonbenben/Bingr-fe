import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import MovieCard from './MovieCard';


const MoviesList = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((prevState) => {
            const newState = prevState;
            console.log(newState, 'increment');
           return newState + 1;
        })
    }

  console.log(props);
  const { movieList } = props;
  console.log(movieList);
  return (
    <MovieCard 
    incrementCounter={incrementCounter}
    movie={movieList[counter]}/>
  );
};

export default MoviesList;
