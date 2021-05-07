import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList, Text, View} from 'react-native';
import currencyFormater from 'currency-formatter';

import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import {ActorItem} from './ActorItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20, marginBottom: 50}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            {' '}
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Trama */}
        <Text style={{fontSize: 22, marginTop: 10, fontWeight: 'bold'}}>
          Trama
        </Text>
        <Text style={{fontSize: 15}}>{movieFull.overview}</Text>
        {/* Presupuesto */}
        <Text style={{fontSize: 22, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 15}}>
          {currencyFormater.format(movieFull.budget, {code: 'USD'})}
        </Text>
        {/* Casting */}
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 22, marginTop: 10, fontWeight: 'bold'}}>
            Actores
          </Text>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={cast}
            renderItem={({item}) => <ActorItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10}}
          />
        </View>
      </View>
    </>
  );
};
