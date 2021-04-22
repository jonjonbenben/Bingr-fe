import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../config';
import { formatGamesRoomMovies } from '../utils/utils';
firebase.initializeApp(firebaseConfig);

export const formattedMoviesArray = [
  {
    id: 278,
    title: 'The Shawshank Redemption',
    up_votes: 0,
    votes_tally: 0,
  },
  {
    id: 724089,
    title: "Gabriel's Inferno Part II",
    up_votes: 0,
    votes_tally: 0,
  },
];

export const createGameRoom = (code, formattedMoviesArray) => {
  firebase
    .firestore()
    .collection('room')
    .doc(code)
    .set({ movies: formattedMoviesArray });
};
