import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {Movie} from '../interfaces/movieInterface';
import {PosterMovie} from './PosterMovie';

interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      style={{
        marginTop: 10,
        height: !!title ? 250 : 210,
      }}>
      {title && (
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 15}}>
          {title}
        </Text>
      )}
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
  );
};

export default HorizontalSlider;
