import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore();

const movieRef = db.collection("movies");

export const getAllMovies = () => {
  return movieRef.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  });
};

export const addMovie = (id, title) => {
  movieRef.add({
    title,
    id,
    votes: 0,
  });
};
const movie = movieRef.doc("ifcmOx3a4HWRFemQ4lvA");
export const updateMovie = () => {
  movie.update({
    title: "of rats and spikes",
  });
};
