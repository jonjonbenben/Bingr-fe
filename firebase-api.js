import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();
const movieRef = db.collection('movies');

export const getMovie = (index, roomCode) => {
  const roomRef = db.collection('room').doc(roomCode);
  return roomRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data().bigMovieData[index];
      } else {
        console.log('Not here');
      }
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
};

export const getAllMovies = async () => {
  const snapshot = await movieRef.get();
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return data;
};

export const addMovie = (id, title) => {
  movieRef.add({
    title,
    id,
    votes: 0
  });
};

const movie = movieRef.doc('ifcmOx3a4HWRFemQ4lvA');

export const updateMovie = () => {
  movie.update({
    title: 'of rats and spikes'
  });
};

// const room = roomRef.doc('jHFSqPX1THcjpuGoeejc');
// export const updateVotes = () => {
//   room.update({ votes: 99 });
// };
