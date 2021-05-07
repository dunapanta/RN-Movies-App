import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const ActorItem = ({actor}: Props) => {
  const actorImage = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path ? (
        <Image source={{uri: actorImage}} style={styles.image} />
      ) : (
        <Image
          source={require('../assets/img/avatar-placeholder.png')}
          style={styles.image}
        />
      )}
      <View style={styles.actorDetails}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  actorDetails: {
    //marginLeft: 20,
  },
  image: {width: 100, height: 100, borderRadius: 10},
  actorName: {fontSize: 15, fontWeight: 'bold'},
  actorCharacter: {fontSize: 14, opacity: 0.7},
});
