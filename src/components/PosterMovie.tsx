import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Movie} from '../interfaces/movieInterface';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const PosterMovie = ({movie, height = 400, width = 280}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={cardStyles({height, width}).card}>
      <Image source={{uri}} style={imageStyles.image} />
    </TouchableOpacity>
  );
};

const cardStyles = ({height, width}: any) =>
  StyleSheet.create({
    card: {
      width: width,
      height: height,
      borderRadius: 18,
      marginHorizontal: 5,
      paddingBottom: 4,
      paddingHorizontal: 4,
      

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 8,
    },
  });

const imageStyles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
