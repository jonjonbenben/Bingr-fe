import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebaseConfig from './config';
import Login from './components/Login';
import { Router } from '@reach/router';
import HostFilter from './components/HostFilter';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <View>
        <Router>
          <Login path='/' />
          <HostFilter path='/:name/hostfilter' />
        </Router>
      </View>
    );
  }
}
