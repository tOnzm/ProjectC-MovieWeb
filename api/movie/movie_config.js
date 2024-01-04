import axios from 'axios';
import config from '../config';

const baseURL = 'https://api.themoviedb.org/3/movie';
const api_Key = config.tmdb_api_key;

const movieApi = axios.create ({
  baseURL,
  timeout: 10000,
});

//แทรก api กับ ภาษา
movieApi.interceptors.request.use (
  function (config) {
    config.params = {
      ...config.params,
      api_key: api_Key,
      language: 'en',
    };
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

export default movieApi;
