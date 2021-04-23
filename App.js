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
import Result from './components/Result';
import MoviesList from './components/MoviesList';
// import { createGameRoom, formattedMoviesArray } from './utils/createGameRoom';

const App = () => {
  const [name, setName] = useState('');
  const [providers, setProviders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [roomCode, setRoomCode] = useState('f');

  return (
    <View>
      <Router>
        <Login setName={setName} path="/" />
        <HostFilter
          setProviders={setProviders}
          setCategories={setCategories}
          setRoomCode={setRoomCode}
          setMovieList={setMovieList}
          name={name}
          roomCode={roomCode}
          movieList={movieList}
          path="/hostfilter"
        />
        <WaitingRoom movieList={movieList} roomCode={roomCode} path="/waitingroom" />
        <MoviesList movieList={movieList} roomCode={roomCode} path="/movieslist" />
        <Result path="/result" />
      </Router>
    </View>
  );
};

export default App;
