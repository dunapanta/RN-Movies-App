import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

import movieDB from '../api/movieDB';
import {MovieDBNowPlaying} from '../interfaces/movieInterface';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    movieDB
      .get<MovieDBNowPlaying>('/now_playing')
      .then(resp => console.log(resp.data.results[0].title));
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="ir detalle"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};
