import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../config';
import { sortMoviesByVotes } from '../utils/utils';
import {fetchSingleMovieById} from '../movie-api'

const Result = () => {
    const [topFive, setTopFive] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [topMovie, setTopMovie] = useState()

    useEffect(()=> {
        const room = firebase
    .firestore()
    .collection('room')
    .doc('MUQL')
    .get()
    .then((doc) => {
      if (!doc.exists) return
      const topFiveMovies = sortMoviesByVotes(doc.data().movies);
        return topFiveMovies
    }).then((topFiveMovies)=> {
        setTopFive(topFiveMovies)
        const topMovie = fetchSingleMovieById(topFiveMovies[0].id)
       return topMovie
    }).then((topMovie) => {
         console.log(topMovie)
        setIsLoading(false)
    })
    }, [])

  return isLoading ? (<div>page is loading</div>) : (
      
    <div>
      <h2>Top Pick</h2>
      <p>{topFive[0].title}</p>
      <h3>Honourable mentions</h3>
      <p>{topFive[1].title}</p>
      <p>{topFive[2].title}</p>
      <p>{topFive[3].title}</p>
      <p>{topFive[4].title}</p>
    </div>
  );
};

export default Result;

//if one or more of the movies has full votes, randomly choose one and render as top choice
//render list of top 5 choices
//set posterpath into state
//render poster in return