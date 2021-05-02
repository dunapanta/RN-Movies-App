import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
}

export const PosterMovie = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View style={styles.card}>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 400,
    borderRadius: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
