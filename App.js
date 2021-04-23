// import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Router } from '@reach/router';
// import Login from './components/Login';
// import HostFilter from './components/HostFilter';
// import WaitingRoom from './components/WaitingRoom';
// import Result from './components/Result';
// import MoviesList from './components/MoviesList';
// import { createGameRoom, formattedMoviesArray } from './utils/createGameRoom';

export const App = () => {
  // const [name, setName] = useState('');
  // const [movieList, setMovieList] = useState([]);
  // const [roomCode, setRoomCode] = useState('f');

  return (
    <View>
      <Text>Hello</Text>
      {/* <Router>
        <Login setName={setName} path='/' />
        <HostFilter
          setRoomCode={setRoomCode}
          setMovieList={setMovieList}
          name={name}
          roomCode={roomCode}
          movieList={movieList}
          path='/hostfilter'
        />
        <WaitingRoom
          movieList={movieList}
          roomCode={roomCode}
          path='/waitingroom'
        />
        <MoviesList movieList={movieList} path='/movieslist' />
        <Result path='/result' />
      </Router> */}
    </View>
  );
};

export default App;
