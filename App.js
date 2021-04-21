import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from '@reach/router';
import firebaseConfig from './config';
import Login from './components/Login';
import HostFilter from './components/HostFilter';
import WaitingRoom from './components/WaitingRoom';
import { fetchTopMovies, fetchMovieById } from './movie-api';
import { filterByGenreId, providersByMovieId, compareProviderIdLists } from './utils/utils';
import { createMovieList, initiateMovieList } from './movieList';

export default class App extends Component {
  componentDidMount() {
    initiateMovieList().then((movieSelection) => {
      console.log(movieSelection);
    });
  }

  render() {
    return (
      <View>
        <Router>
          <Login path="/" />
          <HostFilter path="/:name/hostfilter" />
          <WaitingRoom path="/waitingroom/:name" />
        </Router>
      </View>
    );
  }
}
