import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from '@reach/router';
import firebaseConfig from './config';
import Login from './components/Login';
import HostFilter from './components/HostFilter';
import WaitingRoom from './components/WaitingRoom';
import MovieCard from './components/MovieCard';
import { createGameRoom, formattedMoviesArray } from './utils/createGameRoom';

const App = () => {
  const [name, setName] = useState('');
  const [providers, setProviders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [movieList, setMovieList] = useState([
    {
      adult: false,
      backdrop_path: '/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
      genre_ids: (2)[(18, 80)],
      id: 278,
      original_language: 'en',
      original_title: 'The Shawshank Redemption',
      overview:
        'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
      popularity: 48.395,
      poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      release_date: '1994-09-23',
      title: 'The Shawshank Redemption',
      video: false,
      vote_average: 8.7,
      vote_count: 18770,
    },
  ]);

  return (
    <View>
      <Router>
        <Login setName={setName} path="/" />
        <HostFilter
          setProviders={setProviders}
          setCategories={setCategories}
          setMovieList={setMovieList}
          name={name}
          path="/hostfilter"
        />
        <WaitingRoom movieList={movieList} path="/waitingroom" />
        <MovieCard movieList={movieList} path="/moviecard" />
      </Router>
    </View>
  );
};

export default App;
