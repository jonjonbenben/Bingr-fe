import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebaseConfig from './config';
import { getAllMovies, addMovie, updateMovie } from './api';
import { fetchTopMovies } from './movie-api';

export default function App() {
  // addMovie();
  // updateMovie();
  // getAllMovies();
  fetchTopMovies();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
