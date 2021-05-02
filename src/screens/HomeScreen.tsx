import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import {PosterMovie} from '../components/PosterMovie';
import {useMovies} from '../hooks/useMovies';

const {width} = Dimensions.get('window');

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
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <Carousel
          renderItem={({item}: any) => <PosterMovie movie={item} />}
          sliderWidth={width}
          itemWidth={width - 75}
          data={movies}
        />
        {/* Peliculas Populares */}
        <View style={{backgroundColor: 'red', marginTop: 10, height: 250}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>En Cine:</Text>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={movies}
            renderItem={({item}: any) => (
              <PosterMovie movie={item} width={140} height={200} />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
