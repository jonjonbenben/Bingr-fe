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
import { fetchTopMovies } from './movie-api';
import { filterByGenreId } from './utils/utils';

export default class App extends Component {
  componentDidMount() {
    fetchTopMovies()
      .then((res) => {
        return filterByGenreId(80, res);
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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

// filterByGenreId
// apply map to each movie in filtered list
// use API and movieId to GET providers
// use providersByMovieId to get array of providers
// compare provider ID lists:
//  if compareProvider returns true,
//  return/push movie to final array
