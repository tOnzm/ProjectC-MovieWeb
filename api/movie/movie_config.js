import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/movie';
const key = process.env.TMDB_API_KEY;

function createInstance () {
  const movieApi = axios.create ({
    baseURL,
    timeout: 4000,
    params: {
      api_key: key
    }
  });
  return movieApi
}

/* //แทรก api กับ ภาษา
movieApi.interceptors.request.use (
  function (config) {
    key.params = {
      ...key.params,
      api_key: api_Key,
      language: 'en',
    };
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
); */

export default class movieApi{
  static api = createInstance()
  static key = key
};
