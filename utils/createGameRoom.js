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

  bigMovieData.forEach((movie, index) => {
    const movieId = bigMovieData[index].id;
    const {
      adult,
      backdrop_path,
      genre_ids,
      id,
      original_title,
      original_language,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
    } = bigMovieData[index];
    console.log(movieId.toString(), 'hereee');
    firebase.firestore().collection(code).doc(movieId.toString()).set({
      gran: 'dead',
      grandad: 'prison',
      adult,
      backdrop_path,
      genre_ids,
      id,
      original_title,
      original_language,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
      increment_votes: 0,
      tally: 0,
    });
  });
};
