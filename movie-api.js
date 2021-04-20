import axios from 'axios';
import apiKey from './api-key';
import { filterByGenreId } from './utils/utils';

const req = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchTopMovies = () => {
  return req.get(`/movie/top_rated?api_key=${apiKey}`);
};

export const fetchGenres = () => {
  return req.get(`/genre/movie/list?api_key=${apiKey}`);
};

export const fetchMovieById = (movieId) => {
  return req.get(`/movie/${movieId}/watch/providers?api_key=${apiKey}`);
};

export const fetchProviders = () => {
  return req.get(`/watch/providers/movie?api_key=${apiKey}&language=en-US`);
};

//host inputs filter preferences then submits...
//1. fetch genres and save into state
//2. fetch top rated movies by page then filting through that page and populating an array if the movie matches the filters - provider (by making a get requst by movie id) and genre (comparing to our list of genre ids from get request)
//3. repeat 2 with further pages till the array is desired length
