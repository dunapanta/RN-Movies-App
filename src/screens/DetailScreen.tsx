import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackParams} from '../navigation/Navigation';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const {height} = Dimensions.get('screen');

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon
            color="white"
            name="arrow-back-outline"
            size={50}
            style={styles.backArrow}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator color="blue" size={50} />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    zIndex: 7,
    elevation: 10,
    height: 65,
    width: 65,
    backgroundColor: 'grey',
    opacity: 0.7,
    borderRadius: 50,
    top: 20,
    left: 12,
  },
  backArrow: {
    position: 'relative',
    zIndex: 2,
    elevation: 3,
    top: 7,
    left: 10,
  },
  imageContainer: {
    width: '100%',
    height: height * 0.7,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,

    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
