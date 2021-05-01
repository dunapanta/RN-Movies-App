import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const {movies, loading} = useMovies();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="blue" size={50} />
      </View>
    );
  }

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
