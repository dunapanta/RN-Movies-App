import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f9b276a8a665a41333c2def2f632a2e4',
    language: 'es-ES',
  },
});


export default movieDB