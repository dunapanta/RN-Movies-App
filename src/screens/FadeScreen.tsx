import React from 'react';
import {View, Animated, Button} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#874eee',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#06f234',
          borderColor: 'white',
          borderWidth: 5,
          width: 150,
          height: 150,
          marginBottom: 20,
          opacity: opacity,
        }}
      />

      <Button title="FadedIn" onPress={fadeIn} />

      <Button title="FadedOut" onPress={fadeOut} />
    </View>
  );
};
