import { fetchTopMovies, fetchMovieById } from './movie-api';
import {
  filterByGenreId,
  providersByMovieId,
  compareProviderIdLists,
} from './utils/utils';

export const createMovieList = () => {
  const chosenProviders = [39, 29, 9];
  const movieList = [];
  let pageNumber = 1;
  //   while (pageNumber < 5) {
  //   for (let pageNumber = 1; pageNumber < 20; pageNumber++) {
  fetchTopMovies(pageNumber)
    .then((res) => {
      const moviesByGenreId = filterByGenreId(80, res);
      const moviePromises = moviesByGenreId.map((movie) => {
        return fetchMovieById(movie.id);
      });
      return Promise.all([moviesByGenreId, ...moviePromises]);
    })
    .then((tempMovieList) => {
      console.log(tempMovieList);
    });
  //   const tempMovieList = [];
  //   res.forEach((movie) => {
  //     fetchMovieById(movie.id).then((response) => {
  //       const avaliableProviders = providersByMovieId(response);
  //       if (
  //         compareProviderIdLists(chosenProviders, avaliableProviders) === true
  //       ) {
  //         tempMovieList.push(movie);
  //       }
  //     });
  //   });
  //   return tempMovieList;

  return movieList;
  // .catch((err) => {
  //   console.log(err);
  // });
};
// };

//add a promises
