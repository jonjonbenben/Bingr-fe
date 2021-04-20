import axios from 'axios';
import apiKey from './api-key';
const req = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
});

export const fetchTopMovies = async () => {
  const { data } = await req.get(`/top_rated?api_key=${apiKey}`);
  return data;
};
