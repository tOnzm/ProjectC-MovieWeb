import axios from '@nuxtjs/axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
axios.defaults.headers.common['Authorization'] = TMDB_API_KEY;

const instance = axios.create ({
  baseURL: 'https://api.themoviedb.org/3/movie',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});
