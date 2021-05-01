import {useEffect, useState} from 'react';

import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    setLoading(true);

    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const premierMovies = resp.data.results;

    setMovies(premierMovies);

    setLoading(false);
    /*  movieDB
      .get<MovieDBNowPlaying>('/now_playing')
      .then(resp => console.log(resp.data.results[0].title)); */
  };

  useEffect(() => {
    //now_playing
    getMovies();
  }, []);

  return {
    movies,
    loading,
  };
};
