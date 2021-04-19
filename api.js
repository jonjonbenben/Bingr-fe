import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

const movieRef = db.collection('movies');

// export const getAllMovies = async () => {
//   const { data } = await moviesRef.get();
//   console.log();
//   return data;
// };

// export const getAllMovies = async () => {
//   const doc = await movieRef.get();
//   console.log(doc);
//   return doc;
// };

export const getAllMovies = () => {
  movieRef.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(' dataaaaaaaaaaaa', data);
    // [ { id: 'glMeZvPpTN1Ah31sKcnj', title: 'The Great Gatsby' } ]
  });
};

// NativeModules.exports = { getAllMovies };
