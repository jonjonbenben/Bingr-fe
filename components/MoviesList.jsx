import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import MovieCard from './MovieCard';


const MoviesList = (props) => {
    const { movieList } = props;
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        if (counter < movieList.length - 1) {
            console.log(movieList.length);
            setCounter((prevState) => {
                    const newState = prevState;
                    console.log(newState, 'increment');
                   return newState + 1;
            })
        } else {
            navigate('/result')
        }
    }

  console.log(props);
  console.log(movieList);
  return (
    <MovieCard 
    incrementCounter={incrementCounter}
    movie={movieList[counter]}/>
  );
};

export default MoviesList;
