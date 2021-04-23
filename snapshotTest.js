import firebase from './config';

export const changes = () => {
  firebase
    .firestore()
    .collection('room')
    .doc('jHFSqPX1THcjpuGoeejc')
    .onSnapshot((snapshot) => {
      console.log(snapshot.data(), 'in snapshot');

      // const data = snapshot.docChanges()
    });
};
