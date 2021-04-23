import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../config';
import { formatGamesRoomMovies } from '../utils/utils';
// firebase.initializeApp(firebaseConfig);

export const createGameRoom = (
  code,
  // hostName,
  // formattedMoviesArray,
  bigMovieData
) => {
  const batch = firebase.firestore().batch();
  const newCollection = firebase.firestore().collection(code);
  firebase.firestore().collection(code).add();
  // .then((res) => {
  //   batch.set({ hello: 'darkness' });

  //   // return firebase
  //   //   .firestore()
  //   //   .collection(code)
  //   //   .doc(id)
  //   //   .set({ hello: 'nan' });
  // });

  // const formattedBigMovieData = JSON.parse(JSON.stringify(bigMovieData));
  // // console.log(Array.isArray(formattedBigMovieData));
  // formattedBigMovieData.forEach((movie) => {
  //   const {
  //     adult,
  //     backdrop_path,
  //     genre_ids,
  //     id,
  //     original_title,
  //     original_language,
  //     overview,
  //     popularity,
  //     poster_path,
  //     release_date,
  //     title,
  //     video,
  //     vote_average,
  //     vote_count,
  //   } = movie;
  //   firebase.firestore().collection(code).doc(id).set({
  //     gran: 'dead',
  //     grandad: 'prison',
  //     adult,
  //     backdrop_path,
  //     genre_ids,
  //     id,
  //     original_title,
  //     original_language,
  //     overview,
  //     popularity,
  //     poster_path,
  //     release_date,
  //     title,
  //     video,
  //     vote_average,
  //     vote_count,
  //     increment_votes: 0,
  //     tally: 0,
  //   });
  // });
};
