import firebase from './config';

const db = firebase.firestore();
const movieRef = db.collection('movies');
const roomRef = db.collection('room');

export const getAllMovies = async () => {
  const snapshot = await movieRef.get();
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
};

export const addMovie = (id, title) => {
  movieRef.add({
    title,
    id,
    votes: 0,
  });
};

const movie = movieRef.doc('ifcmOx3a4HWRFemQ4lvA');

export const updateMovie = () => {
  movie.update({
    title: 'of rats and spikes',
  });
};

const room = roomRef.doc('jHFSqPX1THcjpuGoeejc');
export const updateVotes = () => {
  room.update({ votes: 99 });
};
