export const filterByGenreId = (genreId, { data }) => {
  const matchingMovies = data.results.filter((movie) => {
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

export const providersByMovieId = (providers) => {
  const providerIds = [];
  providers.data.results.GB.flatrate.forEach((provider) => {
    providerIds.push(provider.provider_id);
  });
  return providerIds;
};

export const compareProviderIdLists = (chosenProviders, availableProviders) => {
  let match = false;
  chosenProviders.forEach((chosenProviderId) => {
    availableProviders.some((availableProviderId) => {
      if (chosenProviderId === availableProviderId) {
        match = true;
      }
    });
  });
  return match;
};
