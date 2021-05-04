import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

import {PosterMovie} from '../components/PosterMovie';
import {useMovies} from '../hooks/useMovies';

const {width} = Dimensions.get('window');

export const HomeScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  const {nowPlaying, popular, topRated, upcoming, loading} = useMovies();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="blue" size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <Carousel
          renderItem={({item}: any) => <PosterMovie movie={item} />}
          sliderWidth={width}
          itemWidth={width - 75}
          data={nowPlaying}
          inactiveSlideOpacity={0.8}
        />
        {/* Peliculas Populares */}
        <HorizontalSlider title="Populares:" movies={popular} />
        <HorizontalSlider title="Mejores Puntuadas:" movies={topRated} />
        <HorizontalSlider title="Proximamente:" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
