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
import {
  filterByGenreId,
  providersByMovieId,
  compareProviderIdLists,
} from './utils/utils';
import { createMovieList } from './movieList';

export default class App extends Component {
  // chosenProviders = [39, 29, 9];
  // movieList = [];
  // pageNumber = 1;
  componentDidMount() {
    createMovieList();
    //   while (this.pageNumber < 5) {
    //     fetchTopMovies(this.pageNumber)
    //       .then((res) => {
    //         return filterByGenreId(80, res);
    //       })
    //       .then((res) => {
    //         res.forEach((movie) => {
    //           fetchMovieById(movie.id).then((response) => {
    //             const avaliableProviders = providersByMovieId(response);
    //             if (
    //               compareProviderIdLists(
    //                 this.chosenProviders,
    //                 avaliableProviders
    //               ) === true
    //             ) {
    //               this.movieList.push(movie);
    //             }
    //           });
    //         });
    //         console.log(this.movieList);
    //         this.pageNumber++;
    //         return this.movieList;
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }
  }

  render() {
    return (
      <View>
        <Router>
          <Login path='/' />
          <HostFilter path='/:name/hostfilter' />
          <WaitingRoom path='/waitingroom/:name' />
        </Router>
      </View>
    );
  }
}
