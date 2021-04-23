import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore().collection('room');

export const getMovie = async (index, roomCode) => {
  const roomRef = db.doc(roomCode);
  try {
    const doc = await roomRef.get();
    if (doc.exists) {
      return doc.data().bigMovieData[index];
    } else {
      console.log('Not here');
    }
  } catch (err) {
    console.log('Error: ', err);
  }
};

export const incrementVote = (roomCode, filmId) => {
  const roomRef = db.document(`${roomCode}/movies`);
  return roomRef.get().then((doc) => {
    return doc.data();
  });
};

// const room = roomRef.doc('jHFSqPX1THcjpuGoeejc');
// export const updateVotes = () => {
//   room.update({ votes: 99 });
// };
