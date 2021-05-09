import React, {useContext, useEffect} from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {GradientBackground} from '../components/GradientBackground';
import HorizontalSlider from '../components/HorizontalSlider';

import {PosterMovie} from '../components/PosterMovie';
import {useMovies} from '../hooks/useMovies';
import {getImageColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';

const {width} = Dimensions.get('window');

export const HomeScreen = () => {
  const {setPosterColors} = useContext(GradientContext);
  const {top} = useSafeAreaInsets();

  const {nowPlaying, popular, topRated, upcoming, loading} = useMovies();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = '#22ff77', secondary = '#558800'] = await getImageColors(
      uri,
    );
    setPosterColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="blue" size={50} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <Carousel
            renderItem={({item}: any) => <PosterMovie movie={item} />}
            sliderWidth={width}
            itemWidth={width - 75}
            data={nowPlaying}
            inactiveSlideOpacity={0.8}
            onSnapToItem={index => getPosterColors(index)}
          />
          {/* Peliculas Populares */}
          <HorizontalSlider title="Populares:" movies={popular} />
          <HorizontalSlider title="Mejores Puntuadas:" movies={topRated} />
          <HorizontalSlider title="Proximamente:" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
