import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Router } from "@reach/router";
import firebaseConfig from "./config";
import Login from "./components/Login";
import HostFilter from "./components/HostFilter";
import WaitingRoom from "./components/WaitingRoom";
import { fetchTopMovies } from "./movie-api";
import { filterByGenreId } from "./utils/utils";

const App = () => {
  const [name, setName] = useState("");

  const updateName = (name) => {
    setName(name);
  };

  useEffect(() => {
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
  });

  // componentDidMount() {
  //   fetchTopMovies()
  //     .then((res) => {
  //       return filterByGenreId(80, res);
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //}

  return (
    <View>
      <Router>
        <Login updateName={updateName} path="/" />
        <HostFilter name={name} path="/hostfilter" />
        <WaitingRoom path="/waitingroom/:name" />
      </Router>
    </View>
  );
};

export default App;
// filterByGenreId
// apply map to each movie in filtered list
// use API and movieId to GET providers
// use providersByMovieId to get array of providers
// compare provider ID lists:
//  if compareProvider returns true,
//  return/push movie to final array
