import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {PosterMovie} from '../components/PosterMovie';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  const {movies, loading} = useMovies();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="blue" size={50} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      <PosterMovie movie={movies[0]} />
    </View>
  );
};
