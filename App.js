import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebaseConfig from './config';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <View>
        <p>Hello everybody</p>
      </View>
    );
  }
}
