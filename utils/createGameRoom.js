import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../config';
import { formatGamesRoomMovies } from '../utils/utils';
// firebase.initializeApp(firebaseConfig);

export const createGameRoom = (code, hostName, formattedMoviesArray, bigMovieData) => {
  const formattedBigMovieData = JSON.parse(JSON.stringify(bigMovieData));
  firebase
    .firestore()
    .collection('room')
    .doc(code)
    .set({
      movies: formattedMoviesArray,
      users: [hostName],
      bigMovieData: formattedBigMovieData,
    });
};
