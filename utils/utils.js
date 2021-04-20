export const filterByGenreId = (genreId, movies) => {
  const matchingMovies = movies.results.filter((movie) => {
    if (
      movie.genre_ids.some((id) => {
        if (id === genreId) {
          return true;
        }
      }) === true
    ) {
      return movie;
    }
  });
  return matchingMovies;
};
