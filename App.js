import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';
import firebaseConfig from './config';
import { getAllMovies, addMovie, updateMovie } from './api';
import { fetchTopMovies } from './movie-api';

export default class App extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchTopMovies()
      .then((data) => {
        data.results.map(({ id, title }) => {
          return addMovie(id, title);
        });
      })
      .then(() => {
        return getAllMovies();
      })
      .then((res) => {
        this.setState({ movies: res });
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <View style={styles.container}>
        {/* {movies.map(({ title, votes }) => {
          return (
            <div>
              <h1>{title}</h1>
              <p>{votes}</p>
            </div>
          );
        })} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
