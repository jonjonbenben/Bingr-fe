import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

const movieRef = db.collection('movies');

export const getAllMovies = () => {
  movieRef.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(' dataaaaaaaaaaaa', data);
  });
};

export const addMovie = () => {
  movieRef
    .add({
      title: 'Of Mice and Men',
    })
    .then((ref) => {
      console.log('Added doc with ID: ', ref.id);
    });
};
const movie = movieRef.doc('ifcmOx3a4HWRFemQ4lvA');
export const updateMovie = () => {
  movie
    .update({
      title: 'of rats and spikes',
    })
    .then((ref) => {
      console.log('Added doc with ID: ', ref.id);
    });
};
