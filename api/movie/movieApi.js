import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/movie';
const apiKey = process.env.TMDB_API_KEY;

const movieApi = axios.create ({
  baseURL,
});

movieApi.interceptors.request.use (config => {
  config.params = {
    ...config.params,
    api_key: apiKey,
    language: 'en',
  };
  return config;
});

export default movieApi;
