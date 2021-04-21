export const filterByGenreId = (genreIds, { data }) => {
  const matchingMovies = data.results.filter((movie) => {
    if (
      movie.genre_ids.some((id) => {
        return genreIds.includes(id);
      })
    ) {
      return movie;
    }
  });
  return matchingMovies;
};

export const providersByMovieId = (providers) => {
  const providerIds = [];
  /*eslint-disable*/
  if (providers.data.results.hasOwnProperty('GB')) {
    if (providers.data.results.GB.hasOwnProperty('flatrate')) {
      /*eslint-enable*/
      providers.data.results.GB.flatrate.forEach((provider) => {
        providerIds.push(provider.provider_id);
      });
    }
  }
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
